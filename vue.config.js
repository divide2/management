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
  },
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: `http://192.168.27.165:8081`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
