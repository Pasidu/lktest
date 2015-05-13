/**
 * Created by Pasidu on 5/5/2015.
 */
var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    local: {
        username: String,
        password: String,
        salt: String

    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    roles:[String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.local.salt, passwordToMatch) === this.local.password;
    },

    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};

//userSchema.methods.generateHash = function(password){
//    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
//}
//
//userSchema.methods.validPassword = function(password){
//    return bcrypt.compareSync(password, this.local.password);
//}

module.exports = mongoose.model('User', userSchema);