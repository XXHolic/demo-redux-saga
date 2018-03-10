var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.info('reqquest for '+ pathname + ' receives');

    route(pathname);

    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.write('hello world');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.info('server has started');
}

exports.start = start;