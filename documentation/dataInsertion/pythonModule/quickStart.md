# Quick start

## Requirements:
* A running DebiAI instance (see [Installation](../debiai/gettingStarted/installation/README.md))
* [Numpy](https://www.numpy.org/install)
* [Pandas](https://pandas.pydata.org/pandas-docs/stable/install.html)
* Eventually [Tensorflow](https://www.tensorflow.org/install)

## Installation

### From the [debiai pip package](https://pypi.org/project/debiai/)

```bash
pip install --upgrade debiai
```
You can now use the DebiAI module inside your script with `from debiai import debiai`

### Manual installation

**Requirements :**
* setuptools
* wheel
* pip


```bash
# Clone the module repository :
git clone git@github.com:debiai/py-debiai.git
cd py-debiai

# Execute
./build_package.sh

# Install
pip install build_package/*.tar.gz
```
You can now use the DebiAI module inside your script with `from debiai import debiai`

**Update:**

```bash
cd py-debiai

git pull

./build_package.sh

pip install build_package/*.tar.gz
```

## Basic example


### Initialization and project creation


```python
from debiai import debiai
import pandas as pd
import numpy as np

DEBIAI_BACKEND_URL = "http://localhost:3000/"
DEBIAI_PROJECT_NAME = "Hello DebiAI"

# Initialisation
my_debiai = debiai.Debiai(DEBIAI_BACKEND_URL)

# Creating a project
debiai_project = my_debiai.create_project(DEBIAI_PROJECT_NAME)
```

A project named "Hello DebiAI" is now created. To create an other project, change DEBIAI_PROJECT_NAME.
If you're not using the default configuration, you can configure a specific adress in DEBIAI_BACKEND_URL.

If the project already exists, don't create it again but use instead: `debiai_project = my_debiai.get_project(DEBIAI_PROJECT_NAME)`

If you want to delete the project: `my_debiai.delete_project_byId(DEBIAI_PROJECT_NAME)`


### Setting the data structure

Each data to insert must be associated with:
- An **ID**: considering that the dataset and the results will be inserted in two different steps, in order to match them later an ID is recquired for each data inserted.
- A **type**: "text", "number" or "boolean".
- A **label**: "inputs", "groundtruth", "contexts", or "others".

The type and the label are used for authorizing (or suggesting) specific data manipulation or visualizations.

To do so, a **block structure** must be defined, with at least one object containing the following keys:
- *"name"*: for setting the ID column
- *"inputs*, "*groundtruth"*, *"contexts"*, or *"others"*: lists with the *"type"* and the *"name"* of the columns of your dataset.


```python
# Creating the project block structure
block_structure = [
    {
        # The sample: an image with contexts, GDT and an ID
        "name": "Image ID",
        "contexts": [
            {"name": "My context 1",     "type": "text"},
            {"name": "My context 2",     "type": "number"}
        ],
        "groundTruth": [
            {"name": "My groundtruth 1", "type": "number"}
        ]
    }
]

debiai_project.set_blockstructure(block_structure)
```

Note that the block structure is a list of such objects, for dealing with hierarchical information. More information will be given later.

The structure of the data is now set: the next step is to add them.

### Adding data

```python
# ======== Adding the project samples ========
# Adding samples with a dataframe
samples_df = pd.DataFrame({
    "Image ID":         ["image-1", "image-2", "image-3"],
    "My context 1":     ["A", "B", "C"],
    "My context 2":     [0.28, 0.388, 0.5],
    "My groundtruth 1": [8, 7, 19],
})

debiai_project.add_samples_pd(samples_df)
```

The samples are now ready to be analysed with the dashboard.

An important feature of DebiAI is to analyse the results of some models in a contextual way: for instance, the results when "My context 1" is "A", "B" or "C". To do so, the next step is to add model's results.

### Setting the results structure

The first step is to set, for your results, the equivalent of the *block structure*: each result must have an ID (to map them with the data), and a type.

To do so, an **expected results** must be defined (the equivalent of *block structure*, but for the results), with a list of object containing the *"name"* of the column, and the *"type"* ("text", "number" or "boolean"). There is no need to set the ID column: the ID column is set by default, with the same name it has in the block structure ("Image ID" in our case).


```python
# Setting the project models expected results
expected_results = [
    {"name": "Model result",     "type": "number"},
    {"name": "Model confidence", "type": "number"},
    {"name": "Model error",      "type": "text"},
]

debiai_project.set_expected_results(expected_results)
```

Note that in the "results", we can directly add error metrics.


### Adding results

Results are the results of a particular model. Each time we add results, those results must be associated with a specific model, which is defined by a name.
Considering that, the first step is to create a model.

```python
# Create a first model
debiai_model_1 = debiai_project.create_model("Model 1")
```

Now that both the structure of the results is set, and a model is created, you can add some results to a specific model.

```python
# Adding results with a numpy Array
results_np = np.array(
    [["Image ID", "Model result", "Model confidence", "Model error"],
     ["image-1", 3,  0.98, "yes"],
     ["image-2", 7,  0.97, "no"],
     ["image-3", 10, 0.8, "yes"]]
)

debiai_model_1.add_results_np(results_np)
```

If later on you have a second model, you can create an other model.

```python
# Create a first model
debiai_model_2 = debiai_project.create_model("Model 2")
```

This time we will use a pandas dataframe, instead of numpy, for inserting results.

```python
# Adding results with a dataframe
results_df = pd.DataFrame({
    "Image ID": ["image-1", "image-2", "image-3"],
    "Model result": [5, 7, 19],
    "Model confidence": [0.22, 0.8, 0.9],
    "Model error": ["yes", "no", "no"],
})

debiai_model_2.add_results_df(results_df)
```

Now, both the data and the 2 models are ready to be analysed with the Debiai dashboard, available by default at this url : [http://localhost:3000/](http://localhost:3000/)

#### The next step is to [analyse your data with the DebiAI dashboard](../../dashboard/README.md).
