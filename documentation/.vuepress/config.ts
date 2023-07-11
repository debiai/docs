const { version } = require("../../package");
const { path } = require("@vuepress/utils");
const fs = require("fs");

const listAllFolders = (dir) => {
  return fs
    .readdirSync(path.resolve(__dirname, dir))
    .filter((file) => !file.endsWith(".md"))
    .map((file) => {
      return `/dashboard/widgets/${file}/`;
    })
    .sort((a, b) => {
      return a.localeCompare(b);
    });
};

module.exports = {
  title: "DebiAI",
  description: "Documentation for DebiAI",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // Import Fonts
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap",
      },
    ],
    // Import Icons
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/brands.min.css",
      },
    ],
  ],
  // theme: '@vuepress/theme-default',
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/logo_debiai.png",
    repo: "debiai/debiai",
    repoLabel: `GitHub [${version}]`,
    docsRepo: "debiai/docs",
    docsDir: "documentation",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    smoothScroll: true,
    darkMode: false,
    navbar: [
      // { text: 'Home', link: '/' },
      // { text: 'Getting started', link: '/debiai/gettingStarted/' },
      {
        text: "Feature Requests",
        link: "https://github.com/debiai/debiai/issues",
      },
    ],
    sidebar: [
      // Introduction
      {
        text: "Introduction",
        link: "/introduction/",
        children: [
          {
            text: "Getting started",
            link: "/introduction/gettingStarted/",
            children: [
              {
                text: "Installation",
                link: "/introduction/gettingStarted/installation/",
              },
            ],
          },
        ],
      },

      // Data insertion
      {
        text: "Data insertion",
        link: "/dataInsertion",
        children: [
          // Python module
          {
            text: "Python module",
            link: "/dataInsertion/pythonModule/",
            collapsible: true,
            children: [
              "/dataInsertion/pythonModule/quickStart.md"
              // {
              //   text: "Tutorials", link: "/dataInsertion/pythonModule/tutorials/",
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
            text: "Data providers",
            link: "/dataInsertion/dataProviders/",
            collapsible: true,
            children: ["/dataInsertion/dataProviders/quickStart"],
          },
        ],
      },

      // Dashboard
      {
        text: "Dashboard",
        link: "/dashboard/",
        children: [
          {
            text: "Widgets",
            link: "/dashboard/widgets/",
            collapsible: true,
            children: listAllFolders("../../documentation/dashboard/widgets"),
          },
          {
            text: "Widget configurations",
            link: "/dashboard/widgetConfigSave/",
            collapsible: true,
          },
          {
            text: "Saving layouts",
            link: "/dashboard/layouts/",
            collapsible: true,
          },
          {
            text: "Custom algorithms",
            link: "/dashboard/algoProviders/",
            collapsible: true,
            children: [
              "/dashboard/algoProviders/algoProviders.md",
              "/dashboard/algoProviders/implementInBackend.md",
              "/dashboard/algoProviders/integratedAlgorithms.md",
            ],
          },
          {
            text: "Data export",
            link: "/dashboard/dataExport/",
            collapsible: true,
          },
          {
            text: "Analysis export",
            link: "/dashboard/analysisExport/",
            collapsible: true,
          },
        ],
      },

      // Use cases
      {
        text: "Use cases",
        link: "/useCases/",
        children: ["/useCases/woodscape"],
      },
    ],
  },
};
