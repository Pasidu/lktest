/**
 * Created by Pasidu on 5/3/2015.
 */

var mongoose = require('mongoose');

var recipeIngredientsSchema = mongoose.Schema({
    id: {type:Number},
    details: {type:String},
    units: {type:String},
    quantity: {type:String},
    publishedBy: {type:String},
    published: {type:Date},
    tags: [String]
});

var recipeIngredients = mongoose.model('recipeIngredients', recipeIngredientsSchema);

exports.recipeIngredientsSchema = recipeIngredientsSchema;