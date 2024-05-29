const path = require('path');
const fs = require('fs');
const multer = require('multer');
var express = require('express');
var app = express.Router();
const {connection} = require("../config/database");

const storage=  multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }

});

const upload = multer({storage:storage});

app.post('/api/upload', upload.single('file'), (req, res) => {
    const filePath ='http://localhost:3100/'+ req.file.path; 
    res.json({ path: filePath });
  });
  
  
app.use('/uploads', express.static('uploads'));
  
  
module.exports = app;

