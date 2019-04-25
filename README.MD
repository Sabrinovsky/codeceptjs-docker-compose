# Codeceptjs project with docker compose

## Build and up containers
```sh
USER_ID=$(id -u):$(id -g) docker-compose -f docker/docker-compose.test.yml build

USER_ID=$(id -u):$(id -g) docker-compose -f docker/docker-compose.test.yml up -d

docker-compose -f docker/docker-compose.test.yml logs -f
```
### Execute tests
```sh
docker exec codeceptjs codeceptjs run --plugins allure
```
- USER_ID is used to avoid files owned by root, this could cause some problems with jenkins.

- The codeceptjs container will remain sleeping till you send a docker exec

- The entrypoint file allows to install extra packages in the codeceptjs container

- We also use allure plugin in jenkins to see the tests result 

have fun ;)