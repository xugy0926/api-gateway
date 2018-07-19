const colors = require('colors');
const http = require('http')
//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to user : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9001)

//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to post : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9002)

//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to message : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9003)

console.log('http proxy server'.blue + ' started '.green.bold + 'on port '.blue + '8003'.yellow)
console.log('http server '.blue + 'started '.green.bold + 'on port '.blue + '9003 '.yellow)
