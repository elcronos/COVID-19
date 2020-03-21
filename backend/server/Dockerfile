FROM python:3.7-slim-stretch

RUN apt-get update && apt-get install -y curl bash \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -

RUN apt-get update && apt-get install -y git python3-dev gcc nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g serverless

RUN pip install --upgrade pip

RUN pip3 install awscli --upgrade --user --no-warn-script-locatio

COPY app/requirements.txt .

RUN pip install -r requirements.txt

COPY app app/

EXPOSE 5562

# ENTRYPOINT ["python", "app/server.py"]
