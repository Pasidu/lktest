/**
 * Created by Pasidu on 4/22/2015.
 */
var mongoose = require('mongoose'),
    recipeType = require('../models/RecipeType'),
    recipe = require('../models/Recipe');
    recipe = require('../models/Recipe');
    menu = require('../models/Menu');
    //userSessionModel = require('../models/UserSession');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('DB opened');
    });

    recipeType.createDefaultRecipeType();
    recipe.createDefaultRecipes();
    menu.createDefaultmenu();

};
