const express = require('express');
const userModel = require('./models/user');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt')

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded.apply({extends:true}));
app.use(cookieParser());

app.get("/",function(req,res){
    res.render("index")
})

app.post("/register",async function(req,res){
    let {email,password,username,age,name} = req.body;
    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("user already registered");

})

app.listen(4000);