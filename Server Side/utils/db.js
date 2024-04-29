import mysql from 'mysql'


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ch@nd@n@1",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("Connected")
    }
})

export default con;

