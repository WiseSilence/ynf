// https://www.jianshu.com/p/363230827515
module.exports = {
  lintOnSave: false,  //配置关闭eslint
  configureWebpack: {
    resolve: {
      // extensions: [],
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

