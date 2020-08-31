const mysql = require('mysql')
const data = mysql.createConnection({
    host:'localhost',
    user:'Orion',
    password:'01031993Yan!',
    database:'db_yayan',
    port:3306,
    multipleStatements:true
})

module.exports=data