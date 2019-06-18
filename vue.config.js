const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const argv = require('yargs').argv

console.log('current env is:' + argv.env)

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.scss'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, `./global/${argv.env}.js`),
          to: path.resolve(__dirname, './dist/config.js'),
          toType: 'file'
        }
      ])
    ]
  },
  chainWebpack: config => {},
  devServer: {
    port: 3000,
    open: true
  }
}
