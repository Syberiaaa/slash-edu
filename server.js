var db = require('./db');
var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var passwordHash = require('password-hash');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var path = require('path');
// TODO: var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

// Configure passport.js
passport.use(new Strategy(
  function(username, password, cb) {
    console.log(username, password);
    db.model('Users').findOne({email: username}, function(err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (passwordHash.verify(password, user.password)) {
        return cb(null, user);
      } else {
        return cb(null, false);
      }
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  db.model('Users').findById(id, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

// Init express.js

var app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// TODO: uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    key: 'session',
    secret: 'slash edu',
    resave: false,
    store: new MongoStore({mongooseConnection: db.connection}),
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Errors' handlers

// Error gandler for development
// It prints stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Error handler for production
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;