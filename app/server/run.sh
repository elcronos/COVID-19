docker build -t server . && \
docker run -d -p 5562:5562 --name server server:latest
