require('dotenv').config()

const { WEBPACK_PORT } = process.env
// const WEBPACK_PORT = 9000
const publicPath = `https://localhost:${WEBPACK_PORT}`
console.log(publicPath)

module.exports = {
  publicPath,
  configureWebpack: {
    output: {
      library: "starterpackapp",
      libraryTarget: 'umd'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.optimization.delete('splitChunk')
  },
  devServer: {
    server: true,
    port: WEBPACK_PORT,
    // publicPath
  }
}