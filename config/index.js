// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
require("../API/config.js");
module.exports = {
  // production 环境
  build: {
    // 使用 prod.env 中定义的编译环境
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    // 编译输出的静态资源根路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 编译输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布上线路径的根目录，可配置为资源服务器域名或CDN域名
    assetsPublicPath: '/',
    // 是否开启 gzip
    productionGzip: false,
    // 需要使用 gsip 压缩的文件扩展名
    productionGzipExtensions: ['js', 'css']
  },
  // dev环境
  dev: {
    // 使用 dev.env 中定义的编译环境
    env: require('./dev.env'),
    // 进行测试页面的端口
    port: 80,
    // 编译 输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布线上的根目录 可以自定义
    assetsPublicPath: '/',
    proxyTable: {
      // 账户
      '/V1.0.0/account/': {
        target: "http://" + global.logAccountIp + ":" + global.adminPort,
        changeOrigin: true
      },
      // 新闻
      '/V1.0.0/topSearchControl': {
        target: "http://" + global.newsIp + ":" + global.newsPort,
        changeOrigin: true
      },
      // 新闻
      '/V1.0.0/newsControl': {
        target: "http://" + global.newsIp + ":" + global.newsPort,
        changeOrigin: true
      },
      '/V1.0.0/api/file/upload': {
        target: "http://" + global.uploadIp + ":" + global.uploadPort,
        changeOrigin: true
      },
      // 新闻
      '/V1.0.0/classiflyControl': {
        target: "http://" + global.newsIp + ":" + global.newsPort,
        changeOrigin: true
      },
      // 新闻
      '/V1.0.0/userController': {
        target: "http://" + global.newsIp + ":" + global.newsPort,
        changeOrigin: true
      }
    },
    // 是否开启 cssSourceMap
    cssSourceMap: false
  }
}
