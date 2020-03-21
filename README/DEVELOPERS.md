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
         Name                        Command              State                      Ports
-------------------------------------------------------------------------------------------------------------
      Name                Command          State           Ports
-------------------------------------------------------------------------
covid-19_server_1   python app/server.py   Up      0.0.0.0:5562->5562/tcp
covid-19_webapp_1   yarn start             Up      0.0.0.0:1337->1337/tcp
-----------
```