# Inserting Data into DebiAI

As a data visualization application, providing project data to DebiAI is a required step.

## Requirements

### A Running DebiAI Instance

You need a running DebiAI instance to insert your project data. (See [Installation](../introduction/gettingStarted/installation/README.md))

### Data Format Requirements

The data you want to analyze in DebiAI must follow a specific format.

- **CSV-like Format**

  If your data is structured in an array-like format, adding it to DebiAI is straightforward. DebiAI also supports different levels of nesting (see [Unfolding Columns](../dashboard/unfolding/)).

- **Supported Data Types**

  DebiAI supports the following data types:

  - `num`: numerical values
  - `str`: string values
  - `bool`: boolean values
  - `array`: arrays of values (see [Unfolding Columns](../dashboard/unfolding/))
  - `dict`: dictionary objects (see [Unfolding Columns](../dashboard/unfolding/))
  - `None`: missing values

  Dates are supported and should be provided as strings.

- **Handling Missing Values**

  Since version 0.29.0, DebiAI supports missing values (`None`, `NaN`, or `null`). Widgets that support missing values will display them as `null`, and statistics about missing data will be available in the dashboard.

- **Sample Size Limitations**

  Providing more than **2,000,000 samples** is not recommended, as it may significantly increase processing time. We are actively working on improving this limitation.

## Methods for Inserting Data into DebiAI

There are currently two ways to insert data into DebiAI:

<img src="/debiai_architecture.png" alt="DebiAI architecture" width="400"/>

<LinkableChoices :choices="[
    {
        title: '1. Data Providers',
        description: 'Make DebiAI directly access your project data',
        imageLink: '/getStarted/data.svg',
        elementIdDestination: '_1-data-providers-recommended'
    },
    {
        title: '2. Python Module',
        description: 'Directly insert data from your Python workflow',
        imageLink: '/install/python.svg',
        elementIdDestination: '_2-python-module'
    }
  ]"
/>

### **1. [Data Providers](dataProviders/README.md#data-providers) (Recommended)**

A **DebiAI Data Provider** is a service that exposes your project data to DebiAI. This method allows DebiAI to directly retrieve metadata from your project, making data loading **fast** and **customizable**.

✅ **Key benefits**:

- No need to upload or duplicate data in DebiAI.
- Always up to date with the latest project data.
- Works with any files or databases used by your project.

⚠️ **Limitations**:

- Requires a custom implementation to expose your data.

To simplify implementation, you can use the [DebiAI Data Provider Python module](https://github.com/debiai/easy-data-provider).

### **2. [Python Module](pythonModule/README.md#python-module)**

You can also insert data directly from your Python workflow using the [DebiAI Python module](https://github.com/debiai/py-debiai). This is useful for integrating new data or model results immediately after generation.

✅ **Key benefits**:

- Easier to implement.

⚠️ **Limitations**:

- Requires data duplication in DebiAI, increasing load time.
- Data updates must be done manually.

While easier to implement, this method is less efficient than using a Data Provider.

---

By following the recommended **Data Provider** approach, you ensure an optimized project data integration with DebiAI.
