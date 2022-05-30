const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  lintOnSave: false,
  productionSourceMap: isProd,

  chainWebpack: (config) => {
    config.module.rule('images').set('type', 'asset/inline').delete('generator')

    config.module.rule('svg').set('type', 'asset/inline').delete('generator')
  },

  css: {
    extract: false
  }
}
