/**
 * Created by Pasidu on 4/22/2015.
 */
var Recipe = require('mongoose').model('Recipe');
var fs = require('fs')
var config = require('../config/config');

exports.getRecipes = function(req, res) {
    Recipe.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getRecipeById = function(req, res) {
    Recipe.findOne({_id:req.params.id}).exec(function(err, recipe) {
        res.send(recipe);
    })
};

exports.saveRecipe = function(req, res, next){
    var recipeData = req.body.recipeData;
    var dataURL = req.body.image;
    var regex = /^data:.+\/(.+);base64,(.*)$/;
    var matches = dataURL.match(regex);
    if(matches != undefined){
        var ext = matches[1];
        var data = matches[2];
        var buffer = new Buffer(data, 'base64');
        var fileName =  Date.now() +req.user.id +'.' + ext;
        fs.writeFileSync(config.imagesPath + fileName, buffer);
        recipeData.imageName = fileName;
    }

    var currentTime = Date.now();
    if(recipeData._id == undefined){
        recipeData.createdBy = req.user.id;
        recipeData.createdOn = currentTime;
        recipeData.editedBy = req.user.id;
        recipeData.editedOn = currentTime;

        Recipe.create(recipeData, function(err, data){
            if(err){
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.status(200);
            return res.send({message:'successful'});
        });

    }else{
        recipeData.editedBy = req.user.id;
        recipeData.editedOn = currentTime;

        Recipe.findByIdAndUpdate(recipeData._id, recipeData, function(err){
            if(err){
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.status(200);
            return res.send({message:'update successful'});
        });
    }

};

exports.getRecipeByUser = function(req, res){
    Recipe.find({createdBy : req.user.id}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.savePicture = function(req, res, next) {
    var recipeData = req.body;
    Recipe.create(recipeData, function (err, data) {
        if (err) {
        }
    });
};