const path = require('path')

module.exports = {
  plugins: ['vux-ui', 'duplicate-style'],
  resolve: {
    alias: {
      '@': path.join(__dirname,'src')
    }
  }
}