/**
 * Created by Pasidu on 4/22/2015.
 */
var mongoose = require('mongoose');

var recipeTypeSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required!'},
    description: {type:String, required:'{PATH} is required!'},
    publishedBy: {type:String, required: '{PATH} is required'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});
var RecipeType = mongoose.model('RecipeType', recipeTypeSchema);

function createDefaultRecipeType() {
    RecipeType.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            RecipeType.create({name: 'Rice Dishes', description: 'desc', publishedBy : 'admin', published: new Date('10/5/2013'), tags: ['C#']});
            RecipeType.create({name: 'Meat', description: 'desc', publishedBy : 'admin', published: new Date('10/12/2013'), tags: ['C#']});
            RecipeType.create({name: 'Vegetarian', description: 'desc', publishedBy : 'admin', published: new Date('10/1/2013'), tags: ['C#']});
            RecipeType.create({name: 'desert', description: 'desc', publishedBy : 'admin', published: new Date('7/12/2013'), tags: ['VB']});
        }
    })
}

exports.createDefaultRecipeType = createDefaultRecipeType;