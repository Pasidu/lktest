/**
 * Created by Pasidu on 5/5/2015.
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User            = require('../models/User');
var configAuth = require('./facebookAuth');
var encrypt = require('../utilities/encryption');

module.exports = function() {


    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });


    passport.use('local-sign', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done){
            //process.nextTick(function(){
                User.findOne({'local.username': email}, function(err, user){
                    if(err)
                        return done(err);
                    if(user){
                        return done(null, false, "User already exists.");
                    } else {
                        var newUser = new User();
                        newUser.local.username = email;
                        newUser.local.salt = encrypt.createSalt();
                        newUser.local.password = encrypt.hashPwd(newUser.local.salt, password);

                        newUser.save(function(err){
                            if(err)
                                throw err;
                            return done(null, newUser);
                        })
                    }
                })

           // });
        }));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done){
            //process.nextTick(function(){
                User.findOne({ 'local.username': email}, function(err, user){
                    if(err)
                        return done(err);
                    if(!user)
                        return done(null, false, "Invalid username.");
                    if(user &&  user.authenticate(password)){
                        return done(null, user);
                    }
                    return done(null, false, "Incorrect Password.");

                });
            //});
        }
    ));


    passport.use(new FacebookStrategy({
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL
        },
        function(accessToken, refreshToken, profile, done) {
            process.nextTick(function(){
                User.findOne({'facebook.id': profile.id}, function(err, user){
                    if(err)
                        return done(err);
                    if(user)
                        return done(null, user);
                    else {
                        var newUser = new User();
                        newUser.facebook.id = profile.id;
                        newUser.facebook.token = accessToken;
                        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.facebook.email = profile.emails[0].value;

                        newUser.save(function(err){
                            if(err)
                                throw err;
                            return done(null, newUser);
                        })
                        console.log(profile);
                    }
                });
            });
        }

    ));


};