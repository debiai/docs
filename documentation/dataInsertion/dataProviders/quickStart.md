# Quick start

## Creation of a data provider

To help you with the creation of data-providers, we have created some quick start templates. At the moment the templates are available for the following languages:

- Node.js : [https://github.com/debiai/data-provider-nodejs-template](https://github.com/debiai/data-provider-nodejs-template)

You can create your own data-provider as long as the [API](https://hub.apitree.com/Tomansion/debiai-data-provider-api/) is respected.

## Giving your data provider access to DebiAI

After creating and deploying your data-provider, you will need to tell DebiAI where to find it.
There are two ways to do this:

### Environment variables

If you are deploying DebiAI, you can set the environment variables `DEBIAI_DATA_PROVIDER_<my-data-provider-name>=<data-provider-url>` to tell DebiAI where to find your data-provider.

```bash
# Creation of the environment variables
export DEBIAI_DATA_PROVIDER_My-data-provider1=http://localhost:3000/debiai
export DEBIAI_DATA_PROVIDER_My-data-provider2=http://localhost:3010/
```

```bash
# Exemple of use with docker run
docker run -p 3000:3000 \
    -e DEBIAI_DATA_PROVIDER_My-data-provider1=http://localhost:3000/debiai \
    -e DEBIAI_DATA_PROVIDER_My-data-provider2=http://localhost:3010/ \
    debiai/app
```

```yaml
# Or with docker-compose
version: "3.8"
services:
  debiai:
    image: "debiai/app"
    ports:
      - "3000:3000"
    environment:
      # Data providers (DEBIAI_DATA_PROVIDER_<name>=<url>)
      - DEBIAI_DATA_PROVIDER_My-data-provider1=http://localhost:3000/debiai\
      - DEBIAI_DATA_PROVIDER_My-data-provider2=http://localhost:3010/
```

You can see some examples in our DebiAI [`docker-compose-build.yml`](https://github.com/debiai/debiai/blob/main/docker-compose-build.yml) file.

### Configuration file

You can also edit the [`debiai/backend/config/config.ini`](https://github.com/debiai/debiai/blob/main/backend/config/config.ini) file :

```ini
[DATA_PROVIDERS]
# List all the data providers you want to use
My-data-provider1 = http://localhost:3000/debiai/
My-data-provider2 = http://localhost:3010/
```
You will then need to restart DebiAI if you are in development mode or to build a new docker image. Our [`Docker-compose-build`](https://github.com/debiai/debiai/blob/main/docker-compose-build.yml) file can help you with that.

The environment variables take precedence over the configuration file.

## Limitations

If the data-provider is accessible and is conform with the API, DebiAI display the projects in the dashboard like any other projects. There is however certain limitations to a Data-provider's project :

- You won't be able to save samples selection (see [#42] https://github.com/debiai/debiai/issues/42), tags or widget configuration.