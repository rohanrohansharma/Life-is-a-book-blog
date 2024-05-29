var express = require('express');
var app = express.Router();
app.use(express.json());
const {connection} = require("../config/database");
app.post('/api/blogs', (req, res) => {
    const{title,description,imagedescription,image}=req.body;
    const query = 'INSERT INTO blog (`title`, `description`, `imagedescription`, `image`) VALUES (?, ?, ?, ?);'
    connection.query(query,[title,description,imagedescription,image],(error)=>{
        if(error){
            console.log(error);
            res.status(500).json({error:'Internal server error'})
        }
        else{
            res.status(200).json({message:'blog added Successfully'})
        }    
    });
});

app.get('/api/blogs', (req, res) => {
    connection.query('SELECT * FROM blog', (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return; // Exit after sending the error response
        }

        res.status(200).send(results);
    });
});

module.exports = app;
