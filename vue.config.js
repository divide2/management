const vuxLoader = require('vux-loader')
const webpackConfig = require('./webpack.config')


module.exports = {
  configureWebpack: config => {
    vuxLoader.merge(config, webpackConfig)
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
