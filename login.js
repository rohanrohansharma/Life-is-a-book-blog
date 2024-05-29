const {connection} = require("../config/database");
var express = require('express');
var app = express.Router();
app.use(express.json());
app.post('/api/login', (req, res) => {
    const{email,password}=req.body;
    const query = 'SELECT * FROM register WHERE email = ?';
    try{
    connection.query(query,[email], async (error,results) => {
        if(error){
            console.log(error);
            return;
        }
        if(results.length==0){
            res.send('invalid email')
        }

        const user = results[0];
        
        try{
            if(password == user.password){
                res.json({ userId: user.id });
            }
            else{
                res.send('invalid password')
             }
            }    
        catch(error){
            console.log(error)
        }
    });
    }
    catch(error){
        res.send(error,"Error in login");
    }
});


module.exports = app;







