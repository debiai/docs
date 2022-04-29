# Installation

DebiAI offers several installation methods:
- [Installation](#installation)
  - [Official Docker image (recommended)](#official-docker-image-recommended)
    - [Docker-compose](#docker-compose)
  - [Build image from source](#build-image-from-source)
    - [Docker-compose-build](#docker-compose-build)
    - [Docker build](#docker-build)
  - [Development](#development)


## Official Docker image (recommended)

**Requierments :**
- [Docker](https://docs.docker.com/get-docker/)

Using our public docker image is the recommended way to deploy DebiAI on your project server or localy.

```bash
docker run -p 3000:3000 debiai/app
```
Debiai will be available on [http://localhost:3000/](http://localhost:3000/)


**The next step is to provide data to DebiAI: [Inserting data into DebiAI](../../../dataInsertion/README.md)**


**Options :**

You can add the `-d` flag to run the container in the background.

If you want DebiAI to run on a different port, set the `-p` flag to `-p <MyPort>:3000`.

Using a volume to store the data is also possible. If you want to set a volume to DebiAI, set the `-v` flag to `-v <MyVolume>:/backend/data/`, `<MyVolume>` being the absolute path of the empty folder to store your data in.

For example:

```bash
mkdir /tmp/debiai
docker run -p 3000:3000 -v /tmp/debiai:/backend/data/ debiai/app
```

### Docker-compose

Here is a Docker-compose file that will help you deploy DebiAI without having to remember the docker run command.

**Requierments :**
- [Docker compose](https://github.com/docker/compose)

The Docker-compose :
```yaml
version: "3.8"
services:
  debiai:
    image: "debiai/app"
    ports:
      - "3000:3000"
    volumes:
      - ./debiai_data:/backend/data
```


```bash
mkdir debiai
cd debiai

# Create and fill the docker-compose file
nano docker-compose.yml

# Start DebiAI
docker-compose up
```
Debiai will be available on [http://localhost:3000/](http://localhost:3000/)

```bash

# Start DebiAI in background
docker-compose up -d

# Stop DebiAI
docker-compose down
```

## Build image from source

We also provide wayr to build the image instead of pulling it. This is useful if you want to deploy DebiAI with local changes.

### Docker-compose-build

Using our [Docker-compose-build](https://github.com/debiai/debiai/blob/main/docker-compose-build.yml) file.

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
      - ./DEBIAI_data:/backend/data
```

_Volume:_

If you want to make the inserted data persistant, you can set a volume folder. By default, a **DEBIAI_data** folder will be created. If you don't want a volume, you can remove it. If you want to change the folder path, create a folder where you want and replace "./DEBIAI_data" by the path of your folder. Make sure that the folder is empty before running DebiAI.

### Docker build
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
docker run -d -p 3000:3000 --restart=always debiai
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

## Development

If you want to run DebiAI in development mode, you can follow our [development setup guide](./development.md).


**The next step is to provide data to DebiAI: [Inserting data into DebiAI](../../../dataInsertion/README.md)**
