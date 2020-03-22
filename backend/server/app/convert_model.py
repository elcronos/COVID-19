"""
run:
$ python3 convert_model.py

Converts a pytorch model to caffe2 see:
https://machinelearnings.co/serving-pytorch-models-on-aws-lambda-with-caffe2-onnx-7b096806cfac
above tutorial is out of date --> corrected with: https://github.com/onnx/onnx/issues/178

caveat: to check successful conversion (CHECK_CONVERTED_MODEL=True) you have to change onnx
see: https://github.com/onnx/onnx/issues/1481
"""
import onnx
import torch
import torch.onnx
import numpy as np
import torch.nn as nn
import torchvision.models as m
from torch.autograd import Variable
import onnx_caffe2.backend as backend


CAFFE2_MODEL = 'checkpoints/caffe2_model.proto'
PYTORCH_MODEL = 'checkpoints/chk_resnet_50_epoch_14.pt'
CHECK_CONVERTED_MODEL = False


# TODO: This comes from the notebook (Model.ipynb): can we refactor it in a single place?
def initialize_model(use_pretrained=False, num_classes=2):
    model = m.resnet50(pretrained=use_pretrained)
    num_ftrs = model.fc.in_features
    model.fc = nn.Linear(num_ftrs, num_classes)
    input_size = 224
    return model, input_size


def run():

    model, _ = initialize_model()
    model.load_state_dict(torch.load(PYTORCH_MODEL))

    model.cpu()

    # Evaluation Mode
    model.train(False)

    # Create dummy input
    dummy_input = Variable(torch.randn(1, 3, 224, 224))
    output_torch = model(dummy_input)

    # Export ONNX model
    torch.onnx.export(model, dummy_input, CAFFE2_MODEL, verbose=True)
    print(f'converted pytorch model: {PYTORCH_MODEL} to: {CAFFE2_MODEL}')

    if CHECK_CONVERTED_MODEL:

        # Load ONNX model
        model = onnx.load(CAFFE2_MODEL)

        # Check Formation
        onnx.checker.check_model(model)

        # Print Graph to get blob names
        onnx.helper.printable_graph(model.graph)

        # Check model output
        rep = backend.prepare(model, device="CPU")
        output_onnx = rep.run(dummy_input.cpu().data.numpy().astype(np.float32))

        # Verify the numerical correctness up to 3 decimal places
        np.testing.assert_almost_equal(output_torch.data.cpu().numpy(), output_onnx[0], decimal=3)


if __name__ == '__main__':
    run()
