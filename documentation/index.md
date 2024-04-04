---
layout: HomeLayout
home: true

heroImage: hero_image.png
heroText: Bias detection and contextual evaluation tool for your AI projects
tagline: Find bias, select data, evaluate models
# ref: https://vuepress.vuejs.org/theme/default-theme-config.html#homepage
# Note: The home layout has been modified to fit the IRT SystemX theme,
#       The default home layout documentation may not work as expected
---

<!-- Features -->
<div class="features">
  <div class="feature" onclick="window.location.href = '#bias-detection'">
    <h3>
      <img src = "bar_plot.svg"/>
      Bias detection
    </h3>
    <p>DebiAI offers a large and expending set of graphical tools making the detection of bias in the data of your projects easier.</p>
  </div>
  <div class="feature">
    <h3>
      <img src = "trophy.svg"/>
      Model results comparison
    </h3>
    <!-- Badges Ref : https://v1.vuepress.vuejs.org/guide/using-vue.html#built-in-components -->
    <p>Find which model is better on the contexts that matters the most for your project.</p>
  </div>
  <div class="feature">
    <h3>
      <img src = "loop.svg"/>
      Data selection
    </h3>
    <p>With the DebiAi graphical tools and high-level filters, select data for training purpose or for additional exploration.</p>
  </div>
</div>

<style>
  .features img {
    width: 30px;
    padding-right: 5px;
  }
</style>

<!-- Project description -->

DebiAI is an open-source web application that aims to facilitate the process of developing Machine Learning models, especially in the stage of the project data analysis and the model performance comparison.

<br>

DebiAI provides data scientists with features to:

- Identify biases and errors in your input, results, contextual or ground truth project data
- Make a comparison of the performance of your ML models according to their contextual results
- Select and create sets of data graphically for further analysis or (re-)training purposes
- Quickly create and share statistical visualizations of your project data for your team or client

<br>
<br>
<br>

<FeaturesList :features="[
    {
      title: 'Bias detection',
      description: 'Bias in data can lead to unfair or inaccurate predictions, it is important to detect and mitigate bias in your data before training any model.\n\n With DebiAI, you can easily detect bias in your data. Our analysis page provides a wide range of tools to help you identify bias in your data.',
      imageLink: 'features/ans.png',
      linkTitle: 'Bias detection widgets documentation →',
      linkDestination: './dashboard/widgets/#bias-detection'
    },
    {
      title: 'Outliers detection',
      description: 'Outliers can have a significant impact on the results of your model. Searching for outliers in your data is an important and time-consuming task.\n\n DebiAI provides a set of tools to help you identify outliers in your data. Our analysis page provides a wide range of tools to help you identify outliers in your data.',
      imageLink: 'features/ans.png',
      linkTitle: 'Outliers detection widgets documentation →',
      linkDestination: './dashboard/widgets/#outliers-detection'
    },
    {
      title: 'Contextual model comparison',
      description: 'Selecting the best model for your project can be a difficult task and is often based on the global performance of the model. Being able to compare the performance of your models according to the contexts that matter the most for your project is a key feature of DebiAI.',
      imageLink: 'features/ans.png',
      linkTitle: 'Model evaluation widgets documentation →',
      linkDestination: './dashboard/widgets/#model-evaluation'
    },
    {
      title: 'Data selection',
      description: 'Selecting specific data for your project can be challenging with the existing tools. DebiAI widgets are designed to help you select data graphically to do in depth analysis, for training purposes, for cleaning, sharing or any other purpose.',
      imageLink: 'features/ans.png',
      linkTitle: 'Data selection widgets documentation →',
      linkDestination: './dashboard/widgets/#data-selection'
    },
   ]"
/>


![dashboard](./ans.png)

## Dashboard

DebiAI has a Graphical User Interface with a complete data visualization toolkit offering many statistical analysis tools:

The dashboard is customizable and can be used for both large and small projects. Learn more about the [widgets and how to use them](../dashboard/widgets/).

We also provide a full [dashboard documentation](../dashboard/README.md) to help you get the most out of it.

<style>
  img[alt$="dashboard"] {
    float: right;
    width: 650px;
    padding: 0 20px 50px 20px;
  }

  /* Style for phones: */
  @media only screen and (max-width: 600px) {
    img[alt$="dashboard"] {
      float: none;
      width: 100%;
      padding: 0 0 50px 0;
    }
  }
</style>

<br>
<br>
<br>
<br>
<br>
<br>

## Data

DebiAI is designed to be used for any kind projects and data, it is particularly useful for projects that involve many contextual data.

DebiAI provide two main ways to import your data, to learn more about them, check out the [data insertion](dataInsertion/README.md#inserting-data-into-debiai) documentation.

<br>
<br>

## Installation

DebiAI is available as a Docker image. To install it, you can follow the [installation guide](introduction/gettingStarted/installation/README.md#installation).

<br>
<br>

## Use cases

As part of the [Confiance.ai](https://www.confiance.ai/) program, we (the [IRT SystemX](https://www.irt-systemx.fr/)) are using and developing DebiAI for a wide range of use cases.

One of them is the [Valeo - WoodScape](tutorials/woodscapeTutorial/README.md#woodscape-tutorial) project, where we are using DebiAI to help us analyze the data and the results of the project.

<br>
<br>

## Who is DebiAI for?

DebiAI is a high level data exploration tool for data scientists and machine learning experts. It is designed to be easily integrated in your project workflow.

[Get started](introduction/gettingStarted/README.md#getting-started)

<br>
<br>
