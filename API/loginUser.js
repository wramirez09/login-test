const connection = require("./connectDB");
const bcrypt = require("bcrypt");


module.exports.loginUser = function(req, res){


    const password = req.query.password.toString();
    const email = req.query.email.toString();
    const compareQuery = "SELECT * FROM USER WHERE email='" + email + "'";

    connection.connect.query(compareQuery, (err, rows) => {

        if(rows[0].email == email){
            
            const dbPassword = rows[0].password;

            bcrypt.compare(password, dbPassword, function(err, response) {

                if(err){
                    console.log("error", err);
                }

                else if(response == true){
                        console.log("logged in");
                        res.send({
                            "message": `${rows[0].name} is logged in`
                        })
                    }
                else{
                    console.log("not logged in");
                    res.send({
                        "message": "not logged in try again"
                    });
                }
            });
        }
    })

}