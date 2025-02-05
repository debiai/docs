# Modify DebiAI to add your own algorithms

You can insert Python code directly in the DebiAI backend. This is useful if you want to use an algorithm that you have created in Python, but you don't want to host it yourself, or if you want to contribute to the list of integrated algorithms of DebiAI.

DebiAI will run your Python code when you will run the algorithm from the dashboard. Your python code must respect the a format that is described [here](https://github.com/debiai/algo-provider-python-template/blob/main/algo-api/README.md#response)

::: warning
Here is some limitations to this method:

- You can only use Python
- You will need to start DebiAI in development mode
- To go in production, you will need to deploy your own DebiAI instance
  :::

## Getting started

### DebiAI development mode

First, you will need to start DebiAI in development mode. Learn how to do that [here](../../introduction/gettingStarted/installation/development.md).

### Create the algorithm

To create an algorithm, you can start by copying on of the existing algorithms in the [integrated algorithms](integratedAlgorithms.md). You can find the code of the integrated algorithms [on GitHub](https://github.com/debiai/debiai/tree/main/debiaiServer/modules/algoProviders/integratedAlgoProvider/algorithms).

You can then modify the code to fit your needs, DebiAI will automatically read the code that are in the files in `debiaiServer/modules/algoProviders/integratedAlgoProvider/algorithms/*.py`

[Let us know](https://github.com/debiai/debiai/issues) if you have any questions or if you need help.
