require('dotenv').config()

const { NODE_ENV = 'development', WEBPACK_PORT } = process.env
const webpack = require('webpack')
const publicPath = `https://localhost:${WEBPACK_PORT}`

module.exports = {
  publicPath,
  configureWebpack: {
    output: {
      library: 'starterpackapp',
      libraryTarget: 'umd',
    },
    plugins: [new webpack.EnvironmentPlugin({ NODE_ENV })]
  },
  chainWebpack: (config) => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.optimization.delete('splitChunks');
  },
  css: {
    extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    https: true,
    host: 'localhost',
    port: WEBPACK_PORT,
    headers: {
      'Access-Allow-Origin': "*",
      'Access-Allow-Headers': "*",
      'Access-Allow-Methods': "*",
    }
  },
};
