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
    repo: 'debiai',
    repoLabel: `GitHub [${version}]`,
    docsDir: 'content',
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
          {
            text: "Introduction",
            link: "/debiai/introduction/",
          },
          {
            text: "Getting started",
            link: "/debiai/gettingStarted/",
            children: [
              {
                text: "Installation",
                link: "/debiai/gettingStarted/installation/",
                // children: [
                //   "/debiai/gettingStarted/installation/dockerCompose",
                //   "/debiai/gettingStarted/installation/docker",
                //   "/debiai/gettingStarted/installation/kubernetes",
                // ]
              },
              {
                text: "Data insertion",
                link: "/debiai/gettingStarted/dataInsertion/",
              },
            ]
          }
        ]
      },
      // Dashboard
      {
        text: "Dashboard",
        children: [
          "/dashboard/widgets",
          {
            text: "Examples",
            link: "/dashboard/examples/",
            children: [
              "/dashboard/examples/mnist",
              "/dashboard/examples/woodscape"
            ]
          },
        ]
      },
      // Python module
      {
        text: "Python module",
        link: "/pythonModule/",
        children: [
          "/pythonModule/installation",
          "/pythonModule/quickStart",
          {
            text: "Guided examples",
            link: "/pythonModule/guidedExamples/",
            children: [
              "/pythonModule/guidedExamples/mnist",
              "/pythonModule/guidedExamples/woodscape"
            ]
          },
          "/pythonModule/API",
        ]
      },
    ],
  },
}
