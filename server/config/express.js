/**
 * Created by Pasidu on 4/22/2015.
 */
var express = require('express'),
//stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');


module.exports = function (app, config) {
    /*function compile(str, path) {
     return stylus(str).set('filename', path);
     }*/

    app.set('views', config.rootPath + '/server/views'); // sets the view paths
    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '4mb'
    }));
    app.use(bodyParser.json({limit: '4mb'}));


    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }))
    app.use(passport.initialize());
    app.use(passport.session());

//    app.use(stylus.middleware(
//        {
//            src: config.rootPath + '/public',
//            compile: compile
//        }
//    ));
    app.use(express.static(config.rootPath + '/public'));
}