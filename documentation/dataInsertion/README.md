# Inserting data into DebiAI

Being a data visualization application, providing the project data to DebiAI is a required step.

## Requirements

### A DebiAI instance

You will need to have a running DebiAI instance to insert you project data to. (see [Installation](../introduction/gettingStarted/installation/README.md))

### Data

The data you want to analyze with DebiAI will need to respect a specific format.

- **CSV like format**

  If your data can be represented in an array like format, adding them to DebiAI will be easy. The data can also support different levels of nesting (see [unfolding columns](../dashboard/unfolding/)).

- **Data types**

  DebiAI supports the following data types:

  - `num`: numerical values
  - `str`: string values
  - `bool`: boolean values
  - `array`: array of values (see [unfolding columns](../dashboard/unfolding/))
  - `dict`: dictionary of values (see [unfolding columns](../dashboard/unfolding/))

  Dates are supported by DebiAI, you can provide them as strings.

- **Missing values**

  DebiAI supports data with missing values (`None`, `NaN` or `null` values) since 0.29.0. The missing values will be displayed as `null` by widgets that support them. Statistics about missing values will be displayed in the dashboard.

- **Samples size**

  It is not recommended to provide more than 2.000.000 samples, as it will take a long time to process. We are working on improving this limit.

## There is currently two ways to insert data into DebiAI:

- ### [Python module](pythonModule/README.md#python-module)

The main way to add provide the project data to the application is through the DebiAI Python module.
The module was designed to be used directly in your Python workflow, to add model results directly after its evaluation for example.

- ### [Data providers](dataProviders/README.md#data-providers)

A DebiAI data provider is a REST service that will expose your project to DebiAI.
DebiAI will directly ask for the data from your project making the data loading process very quick and customizable. Unlike the DebiAI Python module, the provided data won't have to be duplicated in the DebiAI application.

Making a data provider is the most efficient way to make your project data accessible to DebiAI, no matter the data base that your project is using.
