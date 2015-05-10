/**
 * Created by Pasidu on 4/27/2015.
 */
var mongoose = require('mongoose');
var MenuItem = require('../models/MenuItem');

var menuSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required!'},
    description: {type:String, required:'{PATH} is required!'},
    menuItems : [MenuItem.menuItemSchema],
    publishedBy: {type:String, required: '{PATH} is required'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});
var menu = mongoose.model('menu', menuSchema);

function createDefaultmenu() {
    menu.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            menu.create({name: 'Main Menu', description: 'desc', menuItems : MenuItem.menuItemDemoData, publishedBy : 'admin', published: new Date('10/5/2013'), tags: ['C#']});
        }
    })
}

exports.createDefaultmenu = createDefaultmenu;