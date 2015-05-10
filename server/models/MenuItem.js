/**
 * Created by Pasidu on 4/27/2015.
 */
var mongoose = require('mongoose');

var menuItemSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required!'},
    label: {type:String, required:'{PATH} is required!'},
    type: {type:String, required:'{PATH} is required!'},
    path: {type:String},
    parentMenuName: {type:String, required:'{PATH} is required!'},
    description: {type:String, required:'{PATH} is required!'},
    publishedBy: {type:String, required: '{PATH} is required'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});
var menuItem = mongoose.model('menuItem', menuItemSchema);

var menuItemDemoData = [{name: 'Recipe',label: 'Recipe xx', type: 'button', path : 'Recipe', parentMenuName : 'main', description: 'desc', publishedBy : 'admin', published: new Date('10/5/2013'), tags: ['C#']},
                        {name: 'Blog',label: 'Blog', type: 'button', path : 'Blog', parentMenuName : 'main', description: 'desc', publishedBy : 'admin', published: new Date('10/5/2013'), tags: ['C#']},
                        {name: 'Tips',label: 'Tips', type: 'button', path : 'Tips', parentMenuName : 'main', description: 'desc', publishedBy : 'admin', published: new Date('10/5/2013'), tags: ['C#']}];

function createDefaultmenuItem() {
    menuItem.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            menuItem.create(menuItemDemoData[0]);
            menuItem.create(menuItemDemoData[1]);
            menuItem.create(menuItemDemoData[2]);

        }
    })
}

exports.createDefaultmenuItem = createDefaultmenuItem;
exports.menuItemSchema = menuItemSchema;
exports.menuItemDemoData = menuItemDemoData;