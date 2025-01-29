# Data Providers

Creating a **Data Provider** is the most efficient way to make your project data accessible to DebiAI.

A **Data Provider** is a service that responds to DebiAI's data requests. It can be implemented in **any language**, use **any database**, and be hosted on **any platform**, as long as it follows the **DebiAI Data Provider API**.

Unlike the [DebiAI Python module](../pythonModule/README.md), this method **does not duplicate data** in DebiAI, ensuring that DebiAI always analyzes the latest version of your data.

## How It Works

DebiAI queries your Data Provider to retrieve information for the dashboard:

- **Project lists:** available projects
- **Data IDs:** available samples
- **Project data:** actual data used for analysis
- **Model results:** available models and outputs (optional)
- **Data selections:** user-defined data selections (optional)

Additionally, DebiAI can send data selections made by the user back to the provider:

- **Project deletion**
- **Model deletion**
- **Selection creation and deletion**

## Pros & Cons

✅ **Pros**:

- **Always up to date** – DebiAI always analyzes the latest data.
- **No data duplication** – Saves storage space.
- **Flexibility** – Works with any programming language and database.
- **Platform-independent** – Can be hosted anywhere.
- **Ideal for middle to long-term projects**.

⚠️ **Cons**:

- Requires an initial **custom implementation**, but it's a one-time setup. To simplify implementation, you can use the [DebiAI Data Provider Python module](https://github.com/debiai/easy-data-provider).

## Performance Considerations

The **speed of data loading** into DebiAI depends on how quickly your Data Provider responds. This is influenced by:

- **Data size** – Larger datasets take longer to load.
- **Database performance** – A fast database speeds up response times.

Optimizing your Data Provider ensures **faster** data retrieval in DebiAI.

## Getting Started

To create your first Data Provider, check out our [Quick Start Guide](quickStart/README.md).
