/**
 * Created by Pasidu on 5/3/2015.
 */
var mongoose = require('mongoose');

var recipeInstructionSchema = mongoose.Schema({
    id: {type:Number},
    value: {type:String},
    publishedBy: {type:String},
    published: {type:Date},
    tags: [String]
});

var recipeInstruction = mongoose.model('recipeInstruction', recipeInstructionSchema);

exports.recipeInstructionSchema = recipeInstructionSchema;