var path = require('path');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')
require('./API/config.js')
var app = express()
app.use(express.static(path.join(__dirname, '/dist/')))
var proxyTable = {
  '/V1.0.0/userController': {
    target: "http://" + global.newsIp + ":" + global.newsPort,
    changeOrigin: true
  }
}

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(context, options))
})

app.listen(80, function () {
  console.log('server start')
})
