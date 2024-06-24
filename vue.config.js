module.exports = {
  configureWebpack: {
    output: {
      library: 'starterpack-app',
      libraryTarget: 'umd'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('html'),
      config.plugins.delete('preload'),
      config.plugins.delete('prefetch'),
      config.optimization.delete('splitChunks')
  },
  devServer: {
    server: 'https'
  }
}