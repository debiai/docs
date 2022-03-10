const { version } = require('../../package')

module.exports = {
  title: "DebiAI",
  description: 'Documentation for DebiAI',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    repo: 'debiai/debiai',
    repoLabel: `GitHub [${version}]`,
    docsRepo: 'debiai/docs',
    docsDir: 'documentation',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    darkMode: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/debiai/gettingStarted/' },
    ],
    sidebar: [
      // DebiAI
      {
        text: "DebiAI",
        link: "/debiai/",
        children: [
          {
            text: "Getting started", link: "/debiai/gettingStarted/",
            children: [
              { text: "Installation", link: "/debiai/gettingStarted/installation/" },
            ]
          }
        ]
      },

      // Data insertion
      {
        text: "Data insertion", link: "/dataInsertion", children: [
          // Python module
          {
            text: "Python module", link: "/dataInsertion/pythonModule/",
            collapsible: true,
            children: [
              "/dataInsertion/pythonModule/quickStart.md",
              {
                text: "Tutorials", link: "/dataInsertion/pythonModule/tutorials/",
                children: [
                  "/dataInsertion/pythonModule/tutorials/mnist",
                  "/dataInsertion/pythonModule/tutorials/woodscape"
                ]
              },
              "/dataInsertion/pythonModule/API",
            ]
          },

          // Data providers
          {
            text: "Data providers", link: "/dataInsertion/dataProviders/",
            collapsible: true,
            children: [
              "/dataInsertion/dataProviders/quickStart",
              // "/pythonModule/installation",
              // "/pythonModule/quickStart",
              // {
              //   text: "Guided examples", link: "/pythonModule/guidedExamples/",
              //   children: [
              //     "/pythonModule/guidedExamples/mnist",
              //     "/pythonModule/guidedExamples/woodscape"
              //   ]
              // },
              // "/pythonModule/API",
            ]
          },
        ]
      },

      // Dashboard
      {
        text: "Dashboard", link: "/dashboard", children: [
          {
            text: "Widgets", link: "/dashboard/widgets/",
            children: [
              "/dashboard/examples/mnist",
              "/dashboard/examples/woodscape"
            ]
          },
          {
            text: "Examples", link: "/dashboard/examples/",
            children: [
              "/dashboard/examples/mnist",
              "/dashboard/examples/woodscape"
            ]
          },
        ]
      },
    ],
  },
}
