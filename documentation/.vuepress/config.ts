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
    repo: 'debiai/docs',
    repoLabel: `GitHub [${version}]`,
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
        children: [
          { text: "Introduction", link: "/debiai/introduction/" },
          {
            text: "Getting started", link: "/debiai/gettingStarted/",
            children: [
              { text: "Installation", link: "/debiai/gettingStarted/installation/" },
              { text: "Data insertion", link: "/debiai/gettingStarted/dataInsertion/" },
            ]
          }
        ]
      },

      // Python module
      {
        text: "Python module", link: "/pythonModule/",
        children: [
          "/pythonModule/installation",
          "/pythonModule/quickStart",
          {
            text: "Guided examples", link: "/pythonModule/guidedExamples/",
            children: [
              "/pythonModule/guidedExamples/mnist",
              "/pythonModule/guidedExamples/woodscape"
            ]
          },
          "/pythonModule/API",
        ]
      },

      // Data providers
      {
        text: "Data providers", link: "/dataProviders/",
        children: [
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

      // Dashboard
      {
        text: "Dashboard", children: [
          "/dashboard/introduction/",
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
