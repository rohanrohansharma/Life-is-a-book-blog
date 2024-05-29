var express = require('express');
var app = express.Router();
app.use(express.json());
const {connection} = require("../config/database");

app.post('/api/signup', (req, res) => {
    const{name,email,password}=req.body
        const query= 'INSERT INTO register (`name`, `email`, `password`) VALUES (?, ?, ?);'
        connection.query(query,[name,email,password],(error)=>{
            if(error){
                console.log(error);
                res.status(500).json({error:'Internal server error'})
                
            } 
            else{
              res.status(200).json({message:'user added Successfully'})}
        });
    
      });
module.exports = app;