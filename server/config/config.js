/**
 * Created by Pasidu on 4/22/2015.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/lankanrecipes',
        rootPath: rootPath,
        port: process.env.PORT || 3090
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://mvUser:mvUser@ds061278.mongolab.com:61278/mangalam',
        port: process.env.PORT || 80
    },
    imagesPath : rootPath + '/public/images/'
}
