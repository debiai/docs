# DebiAI Architecture

The architecture of DebiAI is bifurcated into two main environments:

<img src="/debiai_architecture.png" alt="DebiAI Architecture" style="margin: 0 auto; display: block; width: 400px"/>

## The project environment

- **Project Data:** This is the source of data that the user intends to analyze. It may originate from various sources and formats, such as CSV or JSON.
- **Data-Providers:** These are the services created by the project members to enable DebiAI to fetch data and model results directly from the project's sources. Creating a Data-provider allows DebiAI to always fetch up-to-date data with no duplication. A Web Data-Provider can be developed using any programming language, access data from any type of database, and be hosted on any server. The only stipulation is that it should implement and expose a specific REST API according to a defined contract. Users can add as many Data-Providers as they require.
- **Python Scripts and DebiAI Python Module:** Using the DebiAI Python module, users can adapt their existing scripts and workflows to create selections and insert data and model's results into DebiAI. Using the DebiAI Python module is a simpler alternative to creating a Data-provider, but it requires data to be duplicated and the module to be called at each project data update.
- **Algo-Providers:** These services are used to provide the specific algorithms required by projects. Once an algorithm is provided to DebiAI, it can be called from the analysis dashboard with the project's data. The algorithm's results are then displayed and can be used for analysis and filtering purposes like any other data. An Algo-Provider can be developed using any programming language, expose any algorithms and be hosted on any server. The only stipulation is that it should implement and expose a specific REST API according to a defined contract. Users can add as many Algo-Providers as they require.

## DebiAI application environment:

- **Backend and API:** This is a Python-powered backend that provides an API and serves the Web dashboard. This API is employed by the dashboard for data retrieval and by the Python module for data insertion. Additionally, it manages communications with the Web Data-providers, processes computational requests made by the dashboard and calls the Algo-Providers selected from the dashboard.
- **DebiAI WebDashboard:** This is the user interface of DebiAI, developed using VueJs. It provides users with an interactive platform to manage and view their data, and is hosted and served by the DebiAI backend. DebiAI uses different tools to display plots, the main being the PlotlyJs library.
- **Data storage:** DebiAI uses a folder-based data store that contains data in a JSON format. This data store supports the DebiAI backend by retaining projects created by the Python module and some specific dashboard elements, including layout configurations for project dashboards.
