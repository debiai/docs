module.exports = {
  title: "DebiAI",
  description: "Documentation for DebiAI",

  // Extra tags to be injected to the page HTML `<head>`
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  // Theme configuration
  themeConfig: {
    logo: "/logo_debiai.png",
    repo: "debiai/debiai",
    docsRepo: "debiai/docs",
    editLinks: true, // If you want to prevent contributions on your documentation, remove this line
    docsDir: "documentation",
    docsBranch: "main",
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    smoothScroll: true,

    nav: [
      {
        text: "Get Started",
        link: "/introduction/gettingStarted/",
      },
      {
        text: "Demo",
        link: "https://demo.debiai.fr/",
      },
      {
        text: "Tutorials",
        items: [{ text: "Woodscape", link: "/tutorials/woodscapeTutorial/" }],
      },
      {
        text: "Contact",
        link: "/meta/contact.md#contact",
      },
    ],

    // ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: [
      // Getting started
      {
        title: "Get started",
        collapsable: false,
        path: "/introduction/gettingStarted/",
        children: [
          {
            title: "Installation",
            path: "/introduction/gettingStarted/installation/",
          },
        ],
      },

      // Data insertion
      {
        title: "Data insertion",
        path: "/dataInsertion/",
        collapsable: false,
        initialOpenGroupIndex: -1,
        children: [
          // Python module
          {
            title: "Python module",
            path: "/dataInsertion/pythonModule/",
            collapsable: true,
            children: [
              "/dataInsertion/pythonModule/quickStart.md",
              // {
              //   title: "Tutorials", path: "/dataInsertion/pythonModule/tutorials/",
              //   children: [
              //     "/dataInsertion/pythonModule/tutorials/mnist",
              //     "/dataInsertion/pythonModule/tutorials/woodscape"
              //   ]
              // },
              // "/dataInsertion/pythonModule/API",
            ],
          },

          // Data providers
          {
            title: "Data providers",
            path: "/dataInsertion/dataProviders/",
            collapsable: true,
            children: ["/dataInsertion/dataProviders/quickStart"],
          },
        ],
      },

      // Dashboard
      {
        title: "Dashboard",
        path: "/dashboard/",
        collapsable: false,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "Widgets",
            path: "/dashboard/widgets/",
            children: [
              "/dashboard/widgets/1_parallel_coordinates/",
              "/dashboard/widgets/2_data_distribution/",
              "/dashboard/widgets/3_point_plot/",
              "/dashboard/widgets/3D_point_plot/",
              "/dashboard/widgets/confusion_matrix/",
              "/dashboard/widgets/correlation_matrix/",
              "/dashboard/widgets/interval_plot/",
              "/dashboard/widgets/parallel_categories/",
              "/dashboard/widgets/range_slider/",
              "/dashboard/widgets/night_stars_plot/",
              "/dashboard/widgets/density_plot/",
              "/dashboard/widgets/sample_array/",
              "/dashboard/widgets/statistics/",
            ],
          },
          {
            title: "Widget configurations",
            path: "/dashboard/widgetConfigSave/",
            collapsable: true,
          },
          {
            title: "Saving layouts",
            path: "/dashboard/layouts/",
            collapsable: true,
          },
          {
            title: "Custom algorithms",
            path: "/dashboard/algoProviders/",
            collapsable: true,
            children: [
              "/dashboard/algoProviders/algoProviders.md",
              "/dashboard/algoProviders/implementInBackend.md",
              "/dashboard/algoProviders/integratedAlgorithms.md",
            ],
          },
          {
            title: "Data export",
            path: "/dashboard/dataExport/",
            collapsable: true,
          },
          {
            title: "Analysis export",
            path: "/dashboard/analysisExport/",
            collapsable: true,
          },
          {
            title: "Unfolding columns",
            path: "/dashboard/unfolding/",
            collapsable: true,
          },
        ],
      },

      // Tutorials
      {
        title: "Tutorials",
        collapsable: false,
        children: ["/tutorials/woodscapeTutorial/"],
      },
    ],
  },

  // Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
  plugins: [
    [
      "vuepress-plugin-zooming",
      {
        selector: ":not(a) > img",
        delay: 1000,
        options: {
          bgColor: "#ffffff",
          zIndex: 10000,
        },
      },
    ],
    ["matomo", { trackerUrl: "https://matomo.irtsysx.fr/", siteId: "5" }],
  ],
};
