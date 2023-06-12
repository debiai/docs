# Algo-providers, adding custom algorithms to DebiAI

DebiAI allows you to use your own algorithms with the data in the dashboard. This can be useful if you want to use an algorithm that you have created that is not available in DebiAI.

You can add your own algorithms to DebiAI in two ways:

- [Creating an Algo-provider](#creating-an-algo-provider). An algo-provider is a simple Web service that provides one or more algorithms. You can create your own algo-provider with any programming language, host it and provide the URL to DebiAI.

- [Inserting Python code](#inserting-python-code). You can insert Python code directly in the DebiAI backend. This is useful if you want to use an algorithm that you have created in Python, but you don't want to host it yourself.

We are currently working on a way to add algorithms directly from the dashboard, [let us know](https://github.com/debiai/debiai/issues) if you are interested in this or any other feature.

## Creating an Algo-provider

An algo provider is a service that you create that can respond to algorithms requests of DebiAI. This service can be made in **any language**, can use **any kind algorithms** and can be hosted on **any platform** as long at the DebiAI algo-provider's API is respected.

### How does it work?

DebiAI will interact with your algo provider in two ways:

- For getting the list of available algorithms
- For running the algorithms

### The API

The Algo-providers API as been described with OpenAPI 3.0.

- [Algo-providers API Swagger documentation](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/debiai/algo-provider-python-template/main/algo-api/OpenAPI/Algo_OpenAPI_V0.yaml)
- [Alg-providers API yaml file](https://github.com/debiai/algo-provider-python-template/blob/main/algo-api/OpenAPI/Algo_OpenAPI_V0.yaml).

### Getting started

To help you create your first algo provider, we have created an [Algo-provider Python template](https://github.com/debiai/algo-provider-python-template). You can use it as a starting point for your own algo provider.

If you want to create an algo provider in another language, you just need to respect the [Algo-providers API](#the-api).

You need help creating your algo provider? [Create an issue](https://github.com/debiai/debiai/issues) and we will help you.

## Inserting Python code

You can insert Python code directly in the DebiAI backend. This is useful if you want to use an algorithm that you have created in Python, but you don't want to host it yourself.

TODO
