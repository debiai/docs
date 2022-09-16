<!-- omit in toc -->
# Widgets

DebiAI provide a lareg set of widgets that can be used to display data in the dashboard. Find, according to your needs, the widget that suits you the best:

- [Visualisation type](#visualisation-type)
  - [Data overview](#data-overview)
  - [Sample analysis](#sample-analysis)
  - [Bias detection](#bias-detection)
  - [Outlier detection](#outlier-detection)
  - [Model evaluation](#model-evaluation)
  - [Data selection](#data-selection)
  - [Data annotation](#data-annotation)
- [Specific usage](#specific-usage)
  - [Classification](#classification)
  - [Time series](#time-series)


## Visualisation type

### Data overview

Get a large overview of you data:

- [The parallel coordinates](./1_parallel_coordinates/) widget is the perfect tool to quickly get an overview of your data.
- [The 3D point plot](./3D_point_plot/) widget can explore the distribution of 3 features in a 3D space.
- [The point plot](./3_point_plot/) widget can be used to inspect the relation between two features.
- [The data distribution](./2_data_distribution/) plot will help you to get an overview of the distribution of each features.
- [The correlation matrix](./correlation_matrix/) allows you to get the correlation between the features of your data set.

### Sample analysis

Analyse closely a small amount of samples:

- [The point plot](./3_point_plot/) widget can zoom precisely on few samples.
- [The range slider plot](./range_slider/) can explore samples in time series.
- [The interval plot](./interval_plot/) can also display samples in time series.

### Bias detection

Find if your dataset is ballanced:

- [The data distribution](./2_data_distribution/) will help you detect classes of samples that needs to be more represented in your dataset and avoid biased results.
- [The parallel coordinates](./1_parallel_coordinates/) widget will show you if  combinatorics of features are not represented in your dataset.
- [The point plot](./3_point_plot/) widget can show the average of a feature for each class of samples.
- [The 3D point plot](./3D_point_plot/) will help find if combinatorics of features are not represented in your dataset.
- [The correlation matrix](./correlation_matrix/) will help you detect unexpected correlation between features.
  

### Outlier detection

Find if some samples are out of the ordinary:

- [The parallel coordinates](./1_parallel_coordinates/) widget will help you quickly if data are missing, are inconsistent, or are not in a proper format.
- [The range slider plot](./range_slider/) can help you detect outliers in time series.
- [The point plot](./3_point_plot/) widget can show the samples that have an abnormal behaviour, for example with spatial repartition.
- [The 3D point plot](./3D_point_plot/) widget can also show the samples that have an abnormal behaviour but in a 3D space.

### Model evaluation

Find out if your models are performing well and on which features:

- [The point plot](./3_point_plot/) widget can clearly display simultaneously the performances of multiple models according to any project context.
- [The 3D point plot](./3D_point_plot/) widget can show where are the errors using a combinatorics of two features. 
- [The range slider plot](./range_slider/) will help you show the model that performs the best on a time series.
- [The confusion matrix](./confusion_matrix/) widget is useful for classification problems. It shows the number of true positives, true negatives, false positives, and false negatives for each models.
- [The correlation matrix](./correlation_matrix/) will display the correlation between the features and the model performances.

### Data selection

Select samples that are interesting for you:

- [The parallel coordinates](./1_parallel_coordinates/) widget, because it shows numerous columns, makes it very effective for selecting data in any combinatorics of features.
- [The point plot](./3_point_plot/) widget can select data according to their 2D position.

### Data annotation

Annotate graphically your data:

- [The point plot](./3_point_plot/) widget can export a 2D bounding boxe.

## Specific usage

Some widgets are for specific task or data type:

### Classification

- [The confusion matrix](./confusion_matrix/) widget is useful for classification problems. It shows the number of true positives, true negatives, false positives, and false negatives for each models.

### Time series

- [The range slider plot](./range_slider/) is the perfect tool to explore time series.
- [The interval plot](./interval_plot/) can also display samples in time series.
- 