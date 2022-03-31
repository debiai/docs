const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-debiai',
  extends: '@vuepress/theme-default',
  alias: {
    '@theme/HomeFooter.vue': path.resolve(__dirname, 'components/HomeFooter.vue'),
  },
}
