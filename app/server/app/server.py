from starlette.applications import Starlette
from starlette.responses import HTMLResponse, JSONResponse
from starlette.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
import uvicorn, aiohttp, asyncio
from io import BytesIO
from io import StringIO
from model import CNNModel
import sys
from pathlib import Path
import base64
from PIL import Image
import torch
import re

app = Starlette()
# Allow cross origin is unsafe for production
# Use it only for testing purposes
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_headers=['X-Requested-With', 'Content-Type'])

async def setup_learner():
    try:
        cnn = CNNModel()
        return cnn
    except RuntimeError as e:
        print(e)
        message = '\n\nRuntimeError'
        raise RuntimeError(message)

loop = asyncio.get_event_loop()
tasks = [asyncio.ensure_future(setup_learner())]
learn = loop.run_until_complete(asyncio.gather(*tasks))[0]
loop.close()

@app.route('/')
def index(request):
    html = Path('app/view/index.html')
    print(html.open().read())
    return HTMLResponse(html.open().read())
# Receive a Base64 Image
# Method: POST
# hostname:port/predict
@app.route('/predict', methods=['POST'])
async def analyze(request):
    r = await request.json()

    if r['base64Image']:
        data = r['base64Image']
        base64_data = re.sub('^data:image/.+;base64,', '', data)
        byte_data = base64.b64decode(base64_data)
        image_data = BytesIO(byte_data)
        img = Image.open(image_data)
        idx, label, score = learn.predict(img)

    return JSONResponse({'idx': str(idx), 'label': label ,'score': str(score)})

if __name__ == '__main__':
    uvicorn.run(app=app, host='0.0.0.0', port=5562)
