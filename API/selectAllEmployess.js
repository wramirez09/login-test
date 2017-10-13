const connection = require("./connectDB");
module.exports.selectAppEmployess = function(){
    
        connection.connect.query('SELECT * FROM employees', (err,rows) => {
          if(err) throw err;
            rows.forEach( (row) => { 
            console.log(`${row.name} is in ${row.location}`); 
          });
        });
    }
