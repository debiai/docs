const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-debiai',
  extends: '@vuepress/theme-default',
  // Adding the partners logo
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
  // Adding the partners logo in a custom footer
  alias: {
    '@theme/HomeFooter.vue': path.resolve(__dirname, 'components/HomeFooter.vue'),
  },
}
