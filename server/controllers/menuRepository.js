/**
 * Created by Pasidu on 4/28/2015.
 */
var Menu = require('mongoose').model('menu');

exports.getMenus = function(req, res) {
    Menu.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getMenuById = function(req, res) {
    Menu.findOne({_id:req.params.id}).exec(function(err, menu) {
        res.send(menu);
    })
}