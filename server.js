var express = require('express');
var routes = require('./config/routes');
var http = require('http');

var app = module.exports = express();

process.on('SIGTERM', function() {
    console.log('Web server shutting down.');
});

app.configure(function () {
    app.set('port', process.env.PORT || 50000);
    app.set('environment', (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

routes.initializeRoutes(app);

if (!module.parent) {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('API server listening on port ' + app.get('port'));
        console.log('Environment: ' + app.get('environment'));
    });
}
