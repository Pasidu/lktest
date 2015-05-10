/**
 * Created by Pasidu on 4/22/2015.
 */
var mongoose = require('mongoose');
var RecipeInstructions = require('../models/RecipeInstructions');
var RecipeIngredients = require('../models/RecipeIngredients');

var recipeSchema = mongoose.Schema({
    title: {type:String},
    category: {type:String},
    description: {type:String},
    prepTime: {type:String},
    prepTimeUnits : {type:String},
    cookTime: {type:String},
    cookTimeUnits: {type:String},
    serves: {type:String},
    yeild: {type:String},
    instructions: [RecipeInstructions.recipeInstructionSchema],
    ingredients: [RecipeIngredients.recipeIngredientsSchema],
    imageName: {type:String},
    createdBy: {type:String},
    createdOn: {type:Date},
    editedBy : {type: String},
    editedOn : {type: Date},
    tags: [String]
});
var Recipe = mongoose.model('Recipe', recipeSchema);

function createDefaultRecipes() {
    Recipe.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
        }
    })
}

exports.createDefaultRecipes = createDefaultRecipes;