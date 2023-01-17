<!-- omit in toc -->
# Widgets

DebiAI provide a large set of widgets that can be used to display data in the dashboard. 

Find, according to your needs, the widgets that suits your needs according to your current activity, based on the following activity list:

  - [Data overview](#data-overview)
  - [Sample analysis](#sample-analysis)
  - [Bias detection](#bias-detection)
  - [Outlier detection](#outlier-detection)
  - [Model evaluation](#model-evaluation)
  - [Data selection](#data-selection)
  - [Data annotation](#data-annotation)
  - [Data export](#data-export)

Moreover, some widget are specific to some task or data type:

  - [Classification](#classification)
  - [Time series](#time-series)

## Activities

### Data overview

Get a large overview of you data:

- [The parallel coordinates](./1_parallel_coordinates/) widget is the perfect tool to quickly get an overview of your data.
- [The parallel categories](./parallel_categories/) widget can also quickly get an overview of your data and is more efficient with large number of data.
- [The point plot](./3_point_plot/) widget can be used to inspect the relation between two features.
- [The 3D point plot](./3D_point_plot/) widget can be used to inspect the relation between three features in a 3D space.
- [The data distribution](./2_data_distribution/) plot will help you to get an overview of the distribution of each features.
- [The correlation matrix](./correlation_matrix/) allows you to get the correlation between the features of your data set.
- [The satistics](./statistics/) widget can display basic data satistics.

### Sample analysis

Analyse closely a small amount of samples:

- [The point plot](./3_point_plot/) widget can zoom precisely on few samples.
- [The range slider plot](./range_slider/) can explore samples in time series.
- [The interval plot](./interval_plot/) can also display samples in time series with an additional interval value.
- [The sample array](./sample_array/) can display samples in an array.

### Bias detection

Find if your dataset is ballanced:

- [The data distribution](./2_data_distribution/) will help you to detect unbalanced data.
- [The parallel coordinates](./1_parallel_coordinates/) widget will show you if  combinatorics of features are not represented in your dataset.
- [The parallel categories](./parallel_categories/) will also help you to detect unbalanced data on categorical features.
- [The point plot](./3_point_plot/) widget can show the correlation between two features, for instance, the influence of a context on a model result.
- [The 3D point plot](./3D_point_plot/)  widget can show the correlation between three features.
- [The correlation matrix](./correlation_matrix/) will help you detect unexpected correlations between features.
- [The satistics](./statistics/) widget can show abnormal statistics.
  

### Outlier detection

Find if some samples are outliers:

- [The parallel coordinates](./1_parallel_coordinates/) widget will help you to quickly identify if data are missing or inconsistent.
- [The parallel categories](./parallel_categories/) widget can also help you detect outliers in categorical data.
- [The range slider plot](./range_slider/) can help you to visually detect outliers in time series.
- [The point plot](./3_point_plot/) widget can show the samples that have an abnormal behaviour, for example with an abnormal spatial repartition.
- [The 3D point plot](./3D_point_plot/) widget can also show the samples that have an abnormal behaviour but in a 3D space.

### Model evaluation

Find out if your models are performing well and on which features:

- [The point plot](./3_point_plot/) widget can help you to compare the performances of multiple models according to any project context.
- [The 3D point plot](./3D_point_plot/) widget can help you identify to identify model weaknesses using a combinatorics of features. 
- [The range slider plot](./range_slider/) can help you to identify models that performs the best on a time series.
- [The confusion matrix](./confusion_matrix/) widget is a well known tool useful for classification problems.
- [The correlation matrix](./correlation_matrix/) can display the correlation between the features and the model performances.
- [The satistics](./statistics/) widget can show the error average of multiple contexts.

### Data selection

Select samples that are interesting for you, and on which perform further analysis (enventually using the "redraw" option):

- [The parallel coordinates](./1_parallel_coordinates/) widget, because it shows numerous columns, makes it very effective for selecting data in any combinatorics of features.
- [The parallel categories](./parallel_categories/) can help for selections based on categories.

### Data annotation

Select graphically your data:

- [The point plot](./3_point_plot/) widget can select data with a 2D bounding box.
- [The range slider plot](./range_slider/) widget can select data with 1D bounding box.

### Data export

Widget that can export their data with an export method ([learn more](../README.md#exporting-data)):

- [The point plot](./3_point_plot/) widget can export a 2D bounding box.
- [The range slider plot](./range_slider/) widget can export a 1D bounding box.


## Specific usage

Some widgets are for specific task or data type:

### Classification

- [The confusion matrix](./confusion_matrix/) widget is a well known tool useful for classification problems.

### Time series

- [The range slider plot](./range_slider/) is the perfect tool to explore time series.
- [The interval plot](./interval_plot/) will display an interval surrounding a line plot.
