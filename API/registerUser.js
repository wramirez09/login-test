
const connection = require("./connectDB");
const bcrypt = require("bcrypt");

module.exports.registerUser = function(req, res){    
        
        const email = req.query.email.toString();
        const compareQuery = "SELECT * FROM USER WHERE email='" + email + "'";

        app.createNewUser = function(req, res){
            const name = req.query.name.toString();
            const password = req.query.password.toString();
            const saltRounds = 10;
            // encyption 
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(err){
                    console.log("encryption error", err)
                }
                else{
    
                    var createUserSQLquery = "INSERT INTO USER (name, email, password) VALUES ('" + name + "', '" + email + "', '" + hash + "')";

                    connection.connect.query(createUserSQLquery, (err, rows) => {
                        if(err) throw err;
                           res.send({
                               "message": `<small>new user created</small><br /><h1> welcome ${name} !</h1>`
                           } )
                    });
                }
              });
          }

        connection.connect.query(compareQuery, (err, rows) => {

            if(err){
                console.log(err)

            } else if(rows && rows.length > 0){
                console.log("rows", rows);
                res.send({
                    "message": "user already registered"
                })
            }

            else{
                app.createNewUser(req, res);
            }

          });
    }
