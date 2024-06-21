module.exports = {
  configureWebpack: {
    output: {
      library: 'starterpackapp',
      libraryTarget: 'umd',
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.optimization.delete('splitChunks');
  },
  devServer: {
    https: true,
  },
};
