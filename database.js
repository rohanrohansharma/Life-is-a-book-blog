const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mernproject'
});

const connectDB = ()=>{
    connection.connect((error) => {
        if (error) {
            console.log(error)
            return;
        }
        console.log('connected to mysql')
    })
}

module.exports = { connectDB, connection };