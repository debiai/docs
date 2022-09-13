# Inserting data into DebiAI

Being a data visualisation application, providing the project data to DebiAI is a requiered step.

## Requirements

### A DebiAI instance

You will need to have a running DebiAI instance to insert you project data to. (see [Installation](../introduction/gettingStarted/installation/README.md))

### Data

The data you want to analyse with DebiAI will need to respect a specific format.

- **CSV like format**

    If your data can be represented in an array like format, adding them to DebiAI will be easy.

- **No missing values**

    At the moment, DebiAI only supports data with no missing values.

- **Samples size**

    It is not recommended to provide more than 2.000.000 samples, as it will take a long time to process.


## There is currently two ways to insert data into DebiAI:

### [<ins>Python module</ins>](pythonModule/README.md) (Recommended approach)
The main way to add provide the project data to the application is through the DebiAI Python module.
The module was designed to be used directly in your Python workflow, to add model results directly after its evaluation for example.



### [<ins>Data providers</ins>](dataProviders/README.md)
A DebiAI data provider is a REST service that will expose your project to DebiAI.
DebiAI will directly ask for the data from your project making the data loading process very quick and customisable. Unlike the DebiAI Python module, the provided data won't have to be duplicated in the DebiAI application.

Making a data provider is the most efficient way to make your project data accessible to DebiAI, no matter the data base that your project is using.


