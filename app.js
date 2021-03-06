
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

//For Heroku Deployment

var port = process.env.PORT || 3000;
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/portfolio', routes.portfolio);
app.get('/contact', routes.contact);
app.post('/contact', routes.contactPost);
app.get('/services', routes.services);

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
