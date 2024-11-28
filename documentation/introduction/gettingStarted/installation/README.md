# Installation

DebiAI offers several installation methods:

<LinkableChoices :choices="[
    {
        title: 'Pip',
        description: 'Install Debiai-gui python package with pip',
        imageLink: '../../../install/python.svg',
        elementIdDestination: 'debiai-gui-python-package',
        tag: 'Recommended'
    },
    {
        title: 'Docker',
        description: 'Install the project with Docker or Docker Compose',
        imageLink: '../../../install/docker.svg',
        elementIdDestination: 'official-docker-image',
    },
    {
        title: 'Build from source',
        description: 'Build the project from source',
        imageLink: '../../../install/source.svg',
        elementIdDestination: 'build-image-from-source'
    },
    {
        title: 'Development',
        description: 'DebiAI development setup guide',
        imageLink: '../../../install/build.svg',
        linkDestination: './development',
    },
    // Add more installation methods here
  ]"
/>

## Debiai-gui python package

### Installation

**Requirements :**

- [Python](https://www.python.org/downloads/)

Optional : create a virtual python environment:

```
python -m venv debiaivenv
```

Activate the virtual python environment created, on Unix and macOS:

```bash
source debiaivenv/bin/activate
```

Activate the virtual python environment created, on Windows PowerShell:

```
debiaivenv\Scripts\Activate
```

Activate the virtual python environment created, on Windows terminal:

```
debiaivenv\Scripts\activate
```


Install the python package with pip:

```bash
pip install debiai-gui
```

### Start the application

The following command will launch the debiai web application:

```bash
debiai-gui start
```

Debiai will be available on [http://localhost:3000/](http://localhost:3000/)

## Official Docker image

### Docker run

**Requirements :**

- [Docker](https://docs.docker.com/get-docker/)

Using our public docker image is the recommended way to deploy DebiAI on your project server or locally.

```bash
docker run -p 3000:3000 debiai/app
```

Debiai will be available on [http://localhost:3000/](http://localhost:3000/)

**The next step is to provide data to DebiAI: [Inserting data into DebiAI](../../../dataInsertion/README.md#inserting-data-into-debiai)**

**Options :**

You can add the `-d` flag to run the container in the background.

If you want DebiAI to run on a different port, set the `-p` flag to `-p <MyPort>:3000`.

Using a volume to store the data is also possible. If you want to set a volume to DebiAI, set the `-v` flag to `-v <MyVolume>:/debiai_data/`, `<MyVolume>` being the absolute path of the empty folder to store your data in.

For example:

```bash
mkdir /tmp/debiai
docker run -p 3000:3000 -v /tmp/debiai:/debiai_data/ debiai/app
```

You can also provide additional environment variables to tell DebiAI if you have some data-providers (see [Data providers](../../../dataInsertion/dataProviders/README.md) for more information).

### Docker-compose

Here is a Docker-compose file that will help you deploy DebiAI without having to remember the docker run command.

**Requirements :**

- [Docker compose](https://github.com/docker/compose)

The DebiAI Docker-compose file :

```yaml
version: "3.8"
services:
  debiai:
    image: "debiai/app"
    ports:
      - "3000:3000"
    volumes:
      - ./debiai_data:/debiai_data/
```

How to start DebiAI with Docker-compose :

```bash
mkdir debiai
cd debiai

# Create and copy/paste the docker-compose file
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

You can also provide additional environment variables to tell DebiAI if you have some data-providers (see [Data providers](../../../dataInsertion/dataProviders/README.md) for more information).

## Build image from source

We also provide way to build the image instead of pulling it. This is useful if you want to deploy DebiAI with local changes.

### Docker build

**Requirements :**

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

### Docker-compose-build

Using our [Docker-compose-build](https://github.com/debiai/debiai/blob/main/docker-compose-build.yml) file.

**Requirements :**

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
You can now provide your project data to DebiAI : [Inserting data into DebiAI](../../../dataInsertion/README.md#inserting-data-into-debiai)

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
      - ./DEBIAI_data:/debiai_data/
```

If you want to change the volume folder path, create a folder where you want and replace "./debiai_data" by the path of your folder. Make sure there is nothing not related to DebiAI in the folder because it might be removed.

**The next step is to provide data to DebiAI: [Inserting data into DebiAI](../../../dataInsertion/README.md#inserting-data-into-debiai)**
