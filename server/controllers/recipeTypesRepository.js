/**
 * Created by Pasidu on 4/22/2015.
 */
var RecipeType = require('mongoose').model('RecipeType');

exports.getRecipeTypes = function(req, res) {
    RecipeType.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getRecipeTypeById = function(req, res) {
    RecipeType.findOne({_id:req.params.id}).exec(function(err, recipeType) {
        res.send(recipeType);
    })
}