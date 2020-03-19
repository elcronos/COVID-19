FROM python:3.7-slim-stretch

RUN apt-get update && apt-get install -y git python3-dev gcc \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

COPY app app/

RUN pip install -r app/requirements.txt --upgrade

EXPOSE 5562

ENTRYPOINT ["python", "app/server.py"]
