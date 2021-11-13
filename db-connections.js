var mysql = require("mysql");                // used node.js library, created inst
var connection = mysql.createConnection({    // details of database
    host: "localhost",                       // local host refers to ownself
    port: "3306",
    user: "root",
    password: "nuanua!happy!7",
    database: "movie_review"
});

connection.connect(err => {                   // does the connection connect
    if (err) throw err;
    console.log("Connected to DB");
});
module.exports = connection;