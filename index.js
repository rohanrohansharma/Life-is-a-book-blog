var express = require('express');
var app = express();
var path = require('path');
var login = require('./controller/login');
var blog = require('./controller/blog');
var register = require('./controller/register');
var upload =  require('./controller/fileupload');


const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4000'
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const { connectDB } = require('./config/database');

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/login', login);
app.use('/register',register);
app.use('/blog',blog);
app.use('/upload',upload);



require("dotenv").config();
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
