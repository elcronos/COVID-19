.PHONY: 

down:
	docker-compose down
volume:
	docker volume prune -f
pull:
	docker-compose pull
build:
	docker-compose build
dependencies:
	docker-compose run --rm webapp yarn install --ignore-engines
up: pull build dependencies
	docker-compose up -d
	docker ps -a
init: down volume up
ps:
	docker-compose ps
