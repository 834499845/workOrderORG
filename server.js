/**
 * Created by LangK on 2016/12/20.
 */
var path = require('path');
var http = require('http');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')
var proxy = require('express-http-proxy')
require('./API/config.js')
var app = express()
app.use(express.static(path.join(__dirname, '/dist/')))
var proxyTable = {
  '/V1.0.0/account/': {
    target: "http://" + global.logAccountIp + ":" + global.adminPort,
    changeOrigin: true
  },
  '/V1.0.0/topSearchControl': {
    target: "http://" + global.newsIp + ":" + global.newsPort,
    changeOrigin: true
  },
  '/V1.0.0/newsControl': {
    target: "http://" + global.newsIp + ":" + global.newsPort,
    changeOrigin: true
  },
  '/V1.0.0/api/file/upload': {
    target: "http://" + global.uploadIp + ":" + global.uploadPort,
    changeOrigin: true
  },
  '/V1.0.0/classiflyControl': {
    target: "http://" + global.newsIp + ":" + global.newsPort,
    changeOrigin: true
  },
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

// server.listen(port);
app.listen(80, function () {
  console.log('server start')
})
