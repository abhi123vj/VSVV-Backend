//const app = require('./app');
//const connectWithDb = require('./config/db');
//require("dotenv").config();

//connectWithDb();
var express = require("express");
var app = express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is Running at port ${process.env.PORT}`);
})

app.get("/", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });