const colors = require('colors')
const http = require('http')
const logger = require('log4js').getLogger('target-service')

logger.level = 'info'
//
// Target Http Server
//
http.createServer(function (req, res) {
  logger.info('[' + req.method + '] ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to user : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9001)

//
// Target Http Server
//
http.createServer(function (req, res) {
  logger.info('[' + req.method + '] ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to post : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9002)

//
// Target Http Server
//
http.createServer(function (req, res) {
  logger.info('[' + req.method + '] ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to message : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9003)
