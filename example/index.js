var server = require('../server/server');
var router = require('./example-router');

server.start(router.route);