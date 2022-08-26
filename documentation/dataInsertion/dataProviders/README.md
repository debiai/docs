# Data providers

Making a data provider is the most efficient way to make your project data accessible to DebiAI.


A data provider is a service that you create that can respond to the data request of DebiAI. This service can be made in any language, can use any kind of databases and can be hosted on any platform as long at the DebiAI data-provider's API is respected. So unlike the [Debiai Python module](../pythonModule/README.md), your project data won't be duplicated in DebiAI and that DebiAI will always analyse the latest data.

The API as been described with OpenAPI 3.0, here is the [Data-provider's online documentation](https://hub.apitree.com/Tomansion/debiai-data-provider-api/), or the [Data-provider's OpenAPI yaml file](https://github.com/debiai/data-provider-nodejs-template/blob/main/data-provider-API.yaml).

Basically, DebiAI will ask your data provider to return the data that it needs to display the dashboard:

- Available Project lists
- Available data IDs
- Project data
- Available models
- Model results

The speed at which the data will be loaded will be the speed at which your data provider can respond to the request.

To create your first data provider, read our [Quick start](quickStart/README.md).