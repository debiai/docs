# Inserting data

Being a data visualisation application, providing the project data to DebiAI is a requiered step.

## Data format
The data you want to analyse with DebiAI will need to respect a specific format.

- CSV like format

    If your data can be represented in a CSV like format, adding them to DebiAI will be easy.

- No missing values

    At the moment, DebiAI only supports data with no missing values.

- Samples size

    It is not recommended to provide more than 2.000.000 samples, as it will take a long time to process.


## There is currently two ways to insert data into DebiAI:

### Python module
The main way to add provide the project data to the application is through the DebiAI Python module.
The module was designed to be used directly in your Python workflow, to add model results directly after its evaluation for example.

[Quick start](../../../pythonModule/quickStart)

### Data providers
A DebiAI data provider is a REST service that will expose your project to DebiAI.
DebiAI will directly ask for the data from your project making the data loading process very quick and customisable. Unlike the DebiAI Python module, the provided data won't have to be duplicated in the DebiAI application.

Making a data provider is the most efficient way to make your project data accessible to DebiAI, no matter the data base that your project is using.

[Quick start](../../../dataProviders/quickStart)
