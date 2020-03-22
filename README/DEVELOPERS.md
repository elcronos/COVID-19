## How use it?

1. Clone repository

    ```bash
    $ git clone git@github.com:elcronos/COVID-19.git
    ```

2. Run Docker's containers

   ```bash
   $ docker-compose up --build -d
   ```

3. Install webapp dependencies

    ```bash
    $ docker-compose run --rm webapp yarn install --ignore-engines
    ```

Or use:

   ```bash
   $ make init
   ```

Services: 
- Backend: http://localhost:5562
- WebApp: http://localhost:1337

This results in the following running containers:

```bash
$ docker-compose ps
      Name                Command          State           Ports
-------------------------------------------------------------------------
covid-19_server_1   python app/server.py   Up      0.0.0.0:5562->5562/tcp
covid-19_webapp_1   yarn start             Up      0.0.0.0:1337->1337/tcp
-------------------------------------------------------------------------
```

## Deployment

1. Create AWS user with full [permissions](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
2. Copy:
    ```bash
    $ cp .env.dist .env
    ```
3. Add **AWS_ACCESS_KEY_ID** and **AWS_SECRET_ACCESS_KEY**
4. Run deploy command into container
    ```bash
    $ docker-compose run --rm sls sls deploy 