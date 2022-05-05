const { version } = require('../../package')
const { path } = require('@vuepress/utils')

module.exports = {
  title: "DebiAI",
  description: 'Documentation for DebiAI',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/brands.min.css" }],
  ],
  // theme: '@vuepress/theme-default',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/logo_debiai.png',
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
      { text: 'Feature Requests', link: 'https://github.com/debiai/debiai/issues' },
      { text: 'Roadmap', link: 'https://github.com/debiai/debiai/milestones' },
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
    async additionalPages() {
      // Note that VuePress doesn't have request library built-in
      // you need to install it yourself.
      const rp = require('request-promise')
      const content = await rp('https://raw.githubusercontent.com/vuejs/vuepress/master/CHANGELOG.md')
      return [
        {
          path: '/changelog/',
          content
        }
      ]
    }
  },
}
