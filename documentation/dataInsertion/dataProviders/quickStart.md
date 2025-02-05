# Data Providers Quick Start

## Creating a DebiAI Data Provider

There are multiple ways to create a DebiAI Data Provider:

<LinkableChoices :choices="[
    {
        title: 'Python module',
        description: 'Create a Data Provider from a single Python file',
        imageLink: '/install/python.svg',
        elementIdDestination: 'debiai-data-provider-python-module-recommended',
        tag: 'Recommended'
    },
    {
        title: 'Service templates',
        description: 'Generate a Data Provider using a pre-built template',
        imageLink: '/install/template.svg',
        elementIdDestination: 'data-provider-templates'
    },
    {
        title: 'Custom implementation',
        description: 'Build a Data Provider from scratch',
        imageLink: '/install/build.svg',
        elementIdDestination: 'custom-data-provider-implementation'
    }
  ]"
/>

### DebiAI Data Provider Python Module (Recommended)

The simplest way to create a Data Provider is by using the [DebiAI Data Provider Python module](https://github.com/debiai/easy-data-provider). This module allows you to define access methods and event handlers within a single Python class.

### Data Provider Templates

To streamline Data Provider creation, we offer **quick-start templates**. Currently, templates are available for:

- **Node.js**: [GitHub Repository](https://github.com/debiai/data-provider-nodejs-template)

Want support for another language? [Let us know](https://github.com/debiai/data-provider-nodejs-template/issues/new).

### Custom Data Provider Implementation

You can build your own Data Provider as long as it follows the [DebiAI Data Provider API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/debiai/data-provider-nodejs-template/main/data-provider-API.yaml).

## Connecting a Data Provider to DebiAI

After creating your Data Provider, you must configure DebiAI to access it:

<LinkableChoices :choices="[
    {
        title: 'With debiai-gui',
        description: 'If using the cli provided by our python module',
        imageLink: '/install/terminal.svg',
        elementIdDestination: 'with-debiai-gui'
    },
    {
        title: 'From the dashboard',
        description: 'Easiest method, but not persistent',
        imageLink: '/install/screen.svg',
        elementIdDestination: 'connecting-via-the-dashboard'
    },
    {
        title: 'Env. variables',
        description: 'Best for Docker deployments',
        imageLink: '/install/world.svg',
        elementIdDestination: 'connecting-via-environment-variables'
    },
    {
        title: 'Configuration file',
        description: 'For development setups',
        imageLink: '/install/build.svg',
        elementIdDestination: 'connecting-via-configuration-file'
    }
  ]"
/>

---

### With DebiAI-gui

If you are using the [DebiAI-gui Python package](../../introduction/gettingStarted/installation/README.md#debiai-gui-python-package) to run DebiAI, you can add Data-providers directly as parameters:

```bash
debiai-gui start -dp http://localhost:4000 http://localhost:8000
```

DebiAI will automatically connect to the specified Data Providers.

### Connecting via the Dashboard

You can add a Data Provider through the **DebiAI dashboard**:

1. Click **Manage Data Providers** on the home page.
2. Click **New Data Provider**.
3. Fill in the following details:
   - **Data Provider Name**: A unique name for identification.
   - **Data Provider URL**: The endpoint where DebiAI can access the provider.
4. Click **Save**. If the provider is accessible and API-compliant, DebiAI will list the projects in the dashboard.

![Add Data Provider](./data-provider-manager-data-provider-added.png)

::: warning  
**Dashboard-added providers are not persistent.** Restarting DebiAI will remove them. Use **environment variables** or a **configuration file** for persistence.  
:::

### Connecting via Environment Variables

For deployments, you can define environment variables to specify provider URLs.

#### Example:

```bash
export DEBIAI_WEB_DATA_PROVIDER_MyDataProvider1=http://localhost:3000/debiai
export DEBIAI_WEB_DATA_PROVIDER_MyDataProvider2=http://localhost:3010/
```

With Docker:

```bash
docker run -p 3000:3000 \
    -e DEBIAI_WEB_DATA_PROVIDER_MyDataProvider1=http://localhost:3000/debiai \
    -e DEBIAI_WEB_DATA_PROVIDER_MyDataProvider2=http://localhost:3010/ \
    debiai/app
```

With Docker Compose:

```yaml
version: "3.8"
services:
  debiai:
    image: "debiai/app"
    ports:
      - "3000:3000"
    environment:
      - DEBIAI_WEB_DATA_PROVIDER_MyDataProvider1=http://localhost:3000/debiai
      - DEBIAI_WEB_DATA_PROVIDER_MyDataProvider2=http://localhost:3010/
```

For a full list fo environment variables, check the [config.env](https://github.com/debiai/DebiAI/blob/main/debiaiServer/config/config.env) file.

### Connecting via Configuration File

You can also configure providers in config.ini:
Example `(debiai/debiaiServer/config/config.ini)`:

```ini
[DATA_PROVIDERS]
MyDataProvider1 = http://localhost:3000/debiai/
MyDataProvider2 = http://localhost:3010/
```

After editing, restart DebiAI (or rebuild the Docker image if using containers).

::: tip Configuration priority order:

1. DebiAI-gui python module parameters
2. Environment variables
3. Configuration file settings.
   :::

If the provider is accessible and follows the API, DebiAI will list the projects in the dashboard.

::: warning  
**DebiAI must be able to access your Data Provider.**

- If running locally, use `localhost` as the URL.
- If hosted externally, use the **public IP address**.
- When using **Docker**, you may need to use the public IP or `--network host` to access a provider deployed on `localhost`.  
   More details: [Docker documentation](https://docs.docker.com/network/host/).  
  :::
