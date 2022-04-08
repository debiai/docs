# Installation

DebiAI offers several installation methods:
- [Installation](#installation)
  - [Official image (recommended)](#official-image-recommended)
      - [The next step is to provide data to DebiAI: Inserting data into DebiAI](#the-next-step-is-to-provide-data-to-debiai-inserting-data-into-debiai)
  - [Docker-compose](#docker-compose)
  - [Docker build](#docker-build)


## Official image (recommended)

Using our public docker images is the recommended way to deploy DebiAI on your project server or on a local machine.

**Requierment:** [Docker](https://docs.docker.com/get-docker/)

```bash:no-line-numbers
docker run -p 3000:3000 --restart=always debiai/app
```
DebiAI will be available at [http://localhost:3000/](http://localhost:3000/)

**Run DebiAI in background:**

If you want to run DebiAI in background, you can use the `-d` option.

```bash:no-line-numbers
docker run -p 3000:3000 --restart=always debiai/app -d
```
**Change the port:**

If you want to set your DebiAI instance at a different port:

```bash:no-line-numbers
docker run -p 8080:3000 --restart=always debiai/app
```

DebiAI will be available at [http://localhost:8080/](http://localhost:8080/)

**Set a volume:**

If the docker container is shut down, you will lose your projects data. If you want to make the inserted data persistant, you can create a folder and you can use the `-v` option:

```bash:no-line-numbers
mkdir debiai_data

docker run -p 3000:3000 \
  --restart=always \
  -v $(pwd)/debiai_data:/backend/data debiai/app
```
The data will be stored in the `debiai_data` folder.

#### The next step is to provide data to DebiAI: [Inserting data into DebiAI](../../../dataInsertion/README.md)

There is other ways to deploy DebiAI:

## Docker-compose

You can also use our Docker-compose file :

**Requierments :**
- [Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)
- [Docker compose](https://github.com/docker/compose)

Using the `docker-compose-build.yml` file will build and run the DebiAI docker image for you.

```bash
git clone https://github.com/debiai/debiai.git

cd debiai

docker-compose -f docker-compose-build.yml up -d
```

DebiAI will be available by default at this url : [http://localhost:3000/](http://localhost:3000/)
A volume will be created with the `debiai_data` folder.
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
      - ./debiai_data:/app/data
```

_Volume:_

If you want to change the folder path, create a folder where you want and replace "./debiai_data" by the path of your folder. Make sure there is nothing related to DebiAI in the folder because it might be removed.

## Docker build

**Requierments :**
- [Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)
- [Docker](https://docs.docker.com/get-docker/)


Build the docker image :
```bash
git clone https://github.com/debiai/debiai.git

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
