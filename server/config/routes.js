/**
 * Created by Pasidu on 4/22/2015.
 */
 //auth = require('./auth'),
    //users = require('../controllers/userService'),
var  recipeRepository = require('../controllers/recipeRepository'),
    recipeTypesRepository = require('../controllers/recipeTypesRepository'),
    menuRepository = require('../controllers/menuRepository'),
    mongoose = require('mongoose');
    passport = require('passport');

//,    User = mongoose.model('User');

module.exports = function (app, config) {

   /* app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);*/
    //    app.get('/api/admin/identity', auth);
    //Recipes
    //app.get('/api/recipeTypes', recipeTypesRepository.getRecipeTypes);
    //Menus
    app.get('/api/menus', menuRepository.getMenus);

            app.get('/api/recipe', recipeRepository.getRecipes);
            app.get('/api/recipe/:id', recipeRepository.getRecipeById);
            app.get('/api/recipes/byUser', isLoggedIn, recipeRepository.getRecipeByUser);
            app.post('/api/recipe', isLoggedIn, recipeRepository.saveRecipe);
            app.post('/api/recipePicture', isLoggedIn, recipeRepository.savePicture);
            //https://graph.facebook.com/10153379071010962/picture

            app.get('/tabs/menu', function(req, res){
                res.render(config.rootPath + '/public/app/tabs/menu', { showLogin : req.isAuthenticated()});
            });

    app.get('/account', isLoggedIn, function(req, res) {
        res.render('myKitchen',  { id: req.user.facebook.id});
    });
    app.get('/partials/*', function (req, res) {
        res.render(config.rootPath + '/public/app/' + req.params[0]);
    });

    //app.post('/login', auth.authenticate);
/*    app.post('/logout', function (req, res) {
        req.logout();
        res.clearCookie('muser');
        res.end();
    });*/

    //FACEBOOK ROUTES
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/' }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.all('/api/*', function (req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.render('index', { siteName: "Lanka Recipe ssss"}
        //    , {            bootstrappedUser: req.user        }
        );
    });
};

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
        return next();
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
};

//    , {
//    bootstrappedUser: req.user
//}