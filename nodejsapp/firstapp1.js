
var http =require('http');

var server =http.createServer(function(req, res) {
 res.writeHead(200,{'Content-Type': 'text/plan'});
 const msg=('hello')
 res.end('NodeJS App');
});
server.listen(5000);
console.log('Server is running at http://localhost:5000/');
