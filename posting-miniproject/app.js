const express = require('express');
const userModel = require('./models/user');

const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    bcrypt.genSalt(10,(err,salt)=>{
        console.log("salt",salt);
        bcrypt.hash(password,salt,async(err,hash)=>{
            console.log("hash",hash);
          let user =  await userModel.create({
            username,
            email,age,name,password: hash
           });

           let token = jwt.sign({email:email,userid:user._id},"post");
           res.cookie("token",token);
           res.send("registered"); 
        })
    })
})

app.listen(4000);