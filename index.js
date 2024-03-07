const express = require('express');
const dotenv = require('dotenv').config();
const app= express();
const middleware =require('./middleware');
const mongoose =require('./database'); // database connection
const bodyParser = require('body-parser');
app.use([bodyParser.urlencoded({ extended: true }),express.json]);
//***************route**********
//1-login route
const loginRoute=require('./routes/loginRoutes')
app.use("/login",loginRoute);
// 2-regisration route 
const logupRoute=require('./routes/logupRoutes')
app.use("/logup",logupRoute);
/*********** */
app.get("/",middleware.requireLogin,(req,res,next)=>{
    res.end("hello")
});

//listen
const PORT = 3018;
const server =app.listen(PORT,() => {
    console.log("server listinning on port " + PORT)
});