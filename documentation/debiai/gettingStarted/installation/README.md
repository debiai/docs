# Installation

DebiAI offers several installation methods:
- [Installation](#installation)
  - [Official Docker image](#official-docker-image)
  - [Docker-compose (recommended)](#docker-compose-recommended)
  - [Docker](#docker)


## Official Docker image

Coming soon
<!-- TODO -->

## Docker-compose (recommended)

Using our Docker-compose file is the recommended way to deploy DebiAI on your project server or local machine.

**Requierments :**
- [Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)
- [Docker compose](https://github.com/docker/compose)

Using the `docker-compose-build.yml` file will build and run the DebiAI docker image for you.

```bash
git clone git@github.com:debiai/debiai.git

cd debiai

docker-compose -f docker-compose-build.yml up -d
```

DebiAI will be available by default at this url : [http://localhost:3000/](http://localhost:3000/)
A volume will be created with the `DEBIAI_data` folder.
You can now provide your project data to DebiAI : [Inserting data into DebiAI](../../../dataInsertion/README.md)

To stop the DebiAI server, you can run the following command:
```
docker-compose -f docker-compose-build.yml down
```

To upgrade DebiAI :
```
git pull
docker-compose -f docker-compose-build.yml up -d
```
**Editing the docker-compose-build.yml file :**

```yml
version: "3.8"
services:
  debiai:
    build: .
    image: debiai
    ports:
      - 3000:3000
    volumes:
      - ./DEBIAI_data:/app/data
```

_Volume:_

If you want to make the inserted data persistant, you can set a volume folder. By default, a **DEBIAI_data** folder will be created. If you don't want a volume, you can remove it. If you want to change the folder path, create a folder where you want and replace "./DEBIAI_data" by the path of your folder. Make sure that the folder is empty before running DebiAI.

## Docker

**Requierments :**
- [Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)
- [Docker](https://docs.docker.com/get-docker/)


Build the docker image :
```bash
git@github.com:debiai/debiai.git

cd debiai

docker build -t debiai .
```

Run the docker image :
```bash
docker run -d \
   -p 3000:3000 \
   --restart=always \
   --name debiai \
   debiai
```

DebiAI will be available by default at this url : [http://localhost:3000/](http://localhost:3000/)

Stop the docker image :
```bash
docker stop debiai
```

Update the docker image :
```bash
git pull

docker stop debiai
docker container rm debiai

# Then build and run the docker image
```

#### The next step is to provide data to DebiAI: [Inserting data into DebiAI](../../../dataInsertion/README.md)
