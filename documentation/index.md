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

<FeaturesOverview :features="[
    {
      title: 'Bias detection',
      description: 'DebiAI offers a large and expending set of graphical tools making the detection of bias in the data of your projects easier.',
      imageLink: 'features/bar_plot.svg',
      elementIdDestination: 'Bias detection'
    },
    {
      title: 'Model results comparison',
      description: 'Find which model is better on the contexts that matters the most for your project.',
      imageLink: 'features/trophy.svg',
      elementIdDestination: 'Contextual model comparison'
    },
    {
      title: 'Data selection',
      description: 'With the DebiAi graphical tools and high-level filters, select data for training purpose or for additional exploration.',
      imageLink: 'features/loop.svg',
      elementIdDestination: 'Data selection'
    },
  ]"
/>

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

<FeaturesList :features="[
    {
      title: 'Bias detection',
      description: 'Bias in data can lead to unfair or inaccurate predictions, it is important to detect and mitigate bias in your data before training any model.\n\n With DebiAI, you can easily detect bias in your data. Our analysis page provides a wide range of tools to help you identify bias in your data.',
      imageLink: 'features/Bias.png',
      linkTitle: 'Bias detection widgets documentation →',
      linkDestination: './dashboard/widgets/#bias-detection'
    },
    {
      title: 'Outliers detection',
      description: 'Outliers can have a significant impact on the results of your model. Searching for outliers in your data is an important and time-consuming task.\n\n DebiAI provides a set of tools to help you identify outliers in your data. Our analysis page provides a wide range of tools to help you identify outliers in your data.',
      imageLink: 'features/Outliers.png',
      linkTitle: 'Outliers detection widgets documentation →',
      linkDestination: './dashboard/widgets/#outliers-detection'
    },
    {
      title: 'Contextual model comparison',
      description: 'Selecting the best model for your project can be a difficult task and is often based on the global performance of the model. Being able to compare the performance of your models according to the contexts that matter the most for your project is a key feature of DebiAI.',
      imageLink: 'features/Models.png',
      linkTitle: 'Model evaluation widgets documentation →',
      linkDestination: './dashboard/widgets/#model-evaluation'
    },
    {
      title: 'Data selection',
      description: 'Selecting specific data for your project can be challenging with the existing tools. DebiAI widgets are designed to help you select data graphically to do in depth analysis, for training purposes, for cleaning, sharing or any other purpose.',
      imageLink: 'features/Selections.png',
      linkTitle: 'Data selection widgets documentation →',
      linkDestination: './dashboard/widgets/#data-selection'
    },
    {
      title: 'Efficient data visualization',
      description: 'Generating the same visualization every time the project data changes or when new models are trained is a time-consuming task. DebiAI provides features to help you quickly create and share statistical visualizations. By saving your dashboard layout, you can easily generate the same visualization every time you need it.',
      imageLink: 'features/ans.png',
      linkTitle: 'More about the DebiAI dashboard features →',
      linkDestination: './dashboard/#dashboard',
      shadow: true
    },
   ]"
/>

DebiAI intervenes during the data exploration stage and the contextual comparison stage of AI project models. It helps provide intelligence on incomplete or biased data and on model performance, thereby accelerating the resolution of feedback loops.

<br>

<div style="text-align: center;">
    <img class="debiai_activity" id="debiai_activity_h" src="./debiai_activity_h.png" alt="DebiAI activity"/>
    <img class="debiai_activity" id="debiai_activity_v" src="./debiai_activity_v.png" alt="DebiAI activity"/>
</div>

<style>
  .debiai_activity {
    width: 900px;
    padding-bottom: 40px;
    margin: 0 auto;
  }

  #debiai_activity_h {
    display: block;
  }

  #debiai_activity_v {
    width: 400px;
    display: none;
  }

  @media (max-width: 768px) {
    #debiai_activity_h {
      display: none;
    }

    #debiai_activity_v {
      display: block;
    }
  }
</style>

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

<FeaturesList :features="[
    {
      title: 'DebiAI Architecture',
      description: '**Project environment:**\n\n**Project Data:** This is the source of data that the user intends to analyze. It may originate from various sources and formats, such as CSV or JSON.\n**Data-Providers:** These are the services created by the project members to enable DebiAI to fetch data and model results directly from the project\'s sources.\n**Python Scripts and** DebiAI Python Module: Using the DebiAI Python module, users can adapt their existing scripts and workflows to create selections and insert data and model\'s results into DebiAI.\n**Algo-Providers:** These services are used to provide the specific algorithms required by projects. Once an algorithm is provided to DebiAI, it can be called from the analysis dashboard with the project\'s data.\n\n**Application environment:**\n\n**Backend and API:** This is a Python-powered backend that provides an API and serves the Web dashboard.\n**DebiAI Web Dashboard:** This is the user interface of DebiAI, developed using VueJs. It provides users with an interactive platform to manage and view their data, and is hosted and served by the DebiAI backend.\n**Data storage:** This data store supports the DebiAI backend by retaining projects created by the Python module and some specific dashboard elements.',
      imageLink: './debiai_architecture.png',
      linkTitle: 'More about the DebiAI architecture →',
      linkDestination: './meta/architecture'
    },
   ]" :imageSizeRatio="1" />

## Scientific publications

- ICAS 2024 [DebiAI: Open-Source Toolkit for Data Analysis, Visualization and Evaluation in Machine Learning](https://hal.science/hal-04446930).
  - [Best paper award](https://www.iaria.org/conferences2024/AwardsICAS24.html)! 🏆
-  ICAS 2024 Extended [Meet DebiAI: A Versatile Open-Source Tool for Streamlined Data Analysis, Visualization, and ML Model Evaluation](https://hal.science/hal-04886162)

<br>
<br>

## Citation

If you use DebiAI in your research, please cite the following paper:

<!-- cSpell:disable -->

```
@inproceedings{mansion2024debiai,
  title={DebiAI: Open-Source Toolkit for Data Analysis, Visualisation and Evaluation in Machine Learning},
  author={Mansion, Tom and Braud, Rapha{\"e}l and Amrani, Ahmed and Chaouche, Sabrina and Adjed, Faouzi and Cantat, Lo{\"\i}c},
  booktitle={ICAS 2024},
  year={2024}
}
```

<!-- cSpell:enable -->
