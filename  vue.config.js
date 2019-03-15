module.exports = {

  chainWebpack(config) {
    // https://github.com/vuejs/vue-cli/issues/1104
    // https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/111
    config.plugins.delete('fork-ts-checker');
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        return {
          ...options,
          'transpileOnly': false
        }
      });
  }
}
