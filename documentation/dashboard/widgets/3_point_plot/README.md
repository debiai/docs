
# Point plot

[[`Data overview`](../README.md#data-overview)]
[[`Bias detection`](../README.md#bias-detection)]
[[`Outlier detection`](../README.md#anomaly-detection)]
[[`Model evaluation`](../README.md#model-evaluation)]
[[`Data selection`](../README.md#data-selection)]

![](./main.png)

The point plot displays points in 2D space and averages.

It is one of the best way to compare your models' performances with the project contexts. Set the error or success on the Y axis, a context on the X axis and color of the models.

**How to use the widget**

First, select the X and Y columns of your choice

<img src="./0.png" width="100%"/>

You can then display a 2D Point cloud with the **Draw 2D points** button, some statistics with the **Draw statistics** or both by clicking on the two buttons.

<img src="./1.png" width="100%"/>
<img src="./2.png" width="100%"/>
<img src="./3.png" width="100%"/>

If a column is selected as a color, the points will be colored and the statistics will be grouped according to the selected column.

<img src="./4.png" width="100%"/>
<img src="./5.png" width="100%"/>

Checking **Display absolute value** will update plot and display the absolute values of the selected Y axis column.

By increasing the **Bins**, the statistical operations will be more precise.

<img src="./6.png" width="80%"/>

You can also display the statistics as a bar chart by clicking on the **Display as bar** button.

<img src="./7.png" width="80%"/>

You can hide the points or the average by clicking on them in the legend. You can also zoom on a part of the plot by drawing a square on it.

**How to select samples with the point plot widget**

To start filtering samples with the point plot, click on the purple Filter button.

<img src="./8.png" width="80%"/>

Then draw a selection box on the plot.

<img src="./9.png" width="80%"/>

The filters and the selected samples will be updated.

<img src="./10.png" width="80%"/>



