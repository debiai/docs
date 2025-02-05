# DebiAI Algo-providers

An Algo-provider is a service that can respond to the algorithms requests of DebiAI. DebiAI will interact with your Algo-provider in two ways:

- For getting the list of available algorithms
- For running an algorithm and getting the results

## Creating an Algo-provider

We offer different ways to create an Algo-provider:

<LinkableChoices :choices="[
    {
        title: 'Python module',
        description: 'Create an Algo-provider from a single Python function',
        imageLink: '/install/python.svg',
        linkDestination: '/customAlgorithms/algoProviders/easyAlgoProvider',
        tag: 'Recommended'
    },
    {
        title: 'Algo-provider templates',
        description: 'Generate an Algo-provider using a pre-built template',
        imageLink: '/install/template.svg',
        linkDestination: '/customAlgorithms/algoProviders/algoProviderTemplates',
    },
    {
        title: 'Custom implementation',
        description: 'Build an Algo-provider from scratch',
        imageLink: '/install/build.svg',
        linkDestination: '/customAlgorithms/algoProviders/customImplementation',
    },
    {
        title: 'Modify the DebiAI backend',
        description: 'Add your algorithm next to the integrated algorithms',
        imageLink: '/install/heartFile.svg',
        linkDestination: '/customAlgorithms/algoProviders/implementInBackend',
        tag: 'Good for contributors'
    },
  ]"
/>

## Algorithms description

You will need to describe your algorithm in a Json format and then create the implementation of your algorithm. After that, DebiAI will be able to understand your algorithm and run it.

Here is, for example, the description of a simple moving average algorithm:

```json
{
  "id": "moving_average",
  "name": "Moving average",
  "description": "Calculate the moving average of a data.",
  "tags": ["calculations"],
  "author": "DebiAI",
  "version": "1.0.0",
  "inputs": [
    {
      "name": "data",
      "description": "The data to calculate the moving average on.",
      "type": "array",
      "arrayType": "number",
      "lengthMin": 1,
      "lengthMax": 100000
    },
    {
      "name": "periods",
      "description": "The number of periods to calculate the moving average on.",
      "type": "number",
      "default": 3,
      "min": 1,
      "max": 100
    }
  ],
  "outputs": [
    {
      "name": "moving_average",
      "description": "The moving average of the data. Same length as the data",
      "type": "array",
      "arrayType": "number"
    }
  ]
}
```

As you can see, the input and output of the algorithm are described. This description is used by DebiAI to understand how to run the algorithm and how to display it in the dashboard and what kind of data it needs.

To learn more about the algorithms descriptions, you can read the [Algorithm description documentation](https://github.com/debiai/algo-provider-python-template/blob/main/algo-api/README.md).
