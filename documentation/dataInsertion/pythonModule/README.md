# Python module

The DebiAI Python module is an interface for DebiAI.

You can use it directly in your Python project workflow for providing data to DebiAI.

## Features

- Project creation and deletion
- Project data insertion
- Model metadata and model results insertion
- Selection creation and retrieval

[Quick start](./quickStart.md)

## Disabling the DebiAI module Data Provider

If you are using a [data provider](../dataProviders/) and you want to make make DebiAI read only, you may want to disable the DebiAI python module Data Provider.

If you want to disable the DebiAI module, you can do it by adding the environment variable `DEBIAI_PYTHON_MODULE_DATA_PROVIDER_ENABLED` to `False` when starting DebiAI, or edit the `config.ini` file:

```ini
[PYTHON_MODULE_DATA_PROVIDER]
enabled = False
```
