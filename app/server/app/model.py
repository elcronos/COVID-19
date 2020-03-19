#!/usr/bin/python
# Deep Learning Libraries
import torchvision.models as m
from torchvision import datasets, transforms
from torch.autograd import Variable
import torch
import torch.nn as nn
import torchvision.transforms.functional as F
# Utilities
import numpy as np
import json
import os
# Images
from PIL import Image
from io import BytesIO
import base64

"""
 Use model
"""
class CNNModel:

    def __init__(self, use_pretrained=False, num_classes=2):
        self.use_pretrained = use_pretrained
        self.num_classes    = num_classes
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        print('Initializing...')
        PATH_MODEL = f'{os.getcwd()}/app/checkpoints/chk_resnet_50_epoch_14.pt'
        self.model = m.resnet50(pretrained=use_pretrained)
        self.num_ftrs = self.model.fc.in_features
        self.model.fc = nn.Linear(self.num_ftrs, self.num_classes)
        self.model.load_state_dict(torch.load(PATH_MODEL), strict=False)
        # Set Evaluation mode
        self.model.eval()

    def get_transformer(self):
        # Normalize images
        channel_stats = dict(mean=[0.485, 0.456, 0.406],
                                 std=[0.229, 0.224, 0.225])
        # Apply Transformations
        eval_transformation = transforms.Compose([
                transforms.Resize(256),
                transforms.CenterCrop(224),
                transforms.ToTensor(),
                transforms.Normalize(**channel_stats)
        ])

        return eval_transformation

    def preprocess(self, image, transformer):
        x = transformer(image)
        image_tensor = transformer(image).float()
        image_tensor = image_tensor.unsqueeze_(0)
        input = Variable(image_tensor)
        input = input.to(self.device)
        return input

    def softmax(self, x):
        return np.exp(x)/sum(np.exp(x))

    def get_label(self, idx):
        with open("app/labels.json",encoding='utf-8', errors='ignore') as json_data:
            labels = json.load(json_data, strict=False)
            return labels[idx]

    def predict(self, image):
        """
            image: PIL Image
            output: 1000 size vector
        """
        x = self.preprocess(image, self.get_transformer())
        output = self.model(x) # get the output from the last hidden layer of the pretrained model

        if isinstance(output, torch.Tensor):
            output = output.detach().numpy()

        idx   = np.argmax(output[0])
        label = self.get_label(idx)
        score = self.softmax(output[0])[idx]

        return idx, label, score
