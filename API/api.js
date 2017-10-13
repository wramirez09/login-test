
const registerUser = require("./registerUser");
const loginUser = require("./loginUser");

module.exports.registerUser = function(req, res){

    registerUser.registerUser(req, res);
}

module.exports.loginUser = function(req, res){
    
        loginUser.loginUser(req, res);
    }