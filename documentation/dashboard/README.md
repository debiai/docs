# Dashboard

DebiAI has a Graphical User Interface that allows you to navigate through your projects, select selections, select models and start an analysis.

## Project list

Before starting an analysis, you need to select a project from the project list.

<p align="center">
    <img src="./project_list.png" width="100%" style="border:solid 2px #d3d3d3" />
    <em>Home page, project list</em>
</p>

If you have not yet created any projects, selections or models, refer to the [Python module](../dataInsertion/pythonModule/quickStart.md) or to the [Data providers](../dataInsertion/dataProviders/quickStart.md) guides.

## Starting an analysis

After selecting a project you can click on "Analyse" to load the project data and reach the analysis dashboard. If you have any selections or any model results in your project, you can select one or more before starting an analysis, this will only load the data that is in the selection or the model results.

![Project page](./project_page.png)

<p align="center">
    <em>Project page</em>
</p>

## Analysis page

The analysis dashboard is the central part of DebiAI. It is where you will be able to place widgets and explore your data and model results:

![Analysis dashboard](./analysis.png)

<p align="center">
    <em>Analysis page of DebiAI</em>
</p>

Once you have started an analysis and the data is loaded, you will be able to see the analysis dashboard where you can place widgets and explore your data and model results.

### What is a widget?

A widget is an interactive component that you can manipulate to display different aspects of your data and model results.

![Widget](./widget.png)

<p align="center">
    <em>A DebiAI Widget - 2D scatter plot</em>
</p>

A widget offers a set of controls, they are available in the top right corner of the widget:

<p align="center">
    <img src="./widget_controls.png" width="50%" style="border:solid 20px #d3d3d3; border-radius:20px" />
</p>

The controls allow you to, from left to right:

<ul id="widget_controls">
  <li><div class="square white">💬</div>To add a comment to the widget. Comments will be added to the <a href="./analysisExport/">analysis report</a>.</li>
  <li><div class="square white">🖼️</div>To Export the widget as an image.</li>
  <li><div class="square purple">∇</div>To start filtering the data graphically with the widget.</li>
  <li><div class="square blue">💾</div>To save or load the <a href="./widgetConfigSave/">widget configuration</a>.</li>
  <li><div class="square green">📋</div>To create a copy of the widget with the same configuration.</li>
  <li><div class="square yellow">⛭</div>To open the settings panel of the widget.</li>
  <li><div class="square red">x</div>To remove the widget from the dashboard.</li>
</ul>

<style>

#widget_controls li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
}

#widget_controls li a{
  padding-left: 5px;
}

#widget_controls .square {
  display: inline-block;
  width: 30px;
  height: 20px;
  margin-right: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#widget_controls .square.white {
  border: 2px solid #d3d3d3;
}

#widget_controls .square.purple {
  border: 2px solid #d3d3d3;
  background-color: #a000ff;
  color: white;
}

#widget_controls .square.blue {
  border: 2px solid #d3d3d3;
  background-color: #7777ff;
}

#widget_controls .square.green {
  border: 2px solid #d3d3d3;
  background-color: #00bb00;
}

#widget_controls .square.yellow {
  border: 2px solid #d3d3d3;
  background-color: #eeee00;
}

#widget_controls .square.red {
  border: 2px solid #d3d3d3;
  background-color: #ff0000;
  color: white;
}
</style>

:::warning
Note that the controls available in the widget may vary depending on the widget type.
:::

In addition to those controls, you can also interact with the widget itself by dragging it around the dashboard and resizing it

DebiAI provides many widgets that allow you to explore your data and model results. To learn more about the available widgets, refer to the [Full widgets list](./widgets/README.md).

### Dashboard features:

Besides the widgets, the dashboard has several features that allow you to interact with the data and the dashboard itself:

- [Saving a layout](./layouts/). You can save your current dashboard layout to be able to load it later.

- [Custom algorithms](./algoProviders/). You can create your own algorithms, use them with the data in the dashboard to generate new analyzable columns.

- [Exporting data](./dataExport/). You can export your data to other tools for annotation or further analysis purposes.

- [Exporting analysis results](./analysisExport/). Once you have finished your analysis, you can generate a report with the results.
