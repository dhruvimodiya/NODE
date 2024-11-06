const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const user = require('./models/user');

app.set("view engine",'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.render("index")
})

app.get('/read',async function(req,res){
    let users = await userModel.find()
    res.render("read",{users})
})

// create the user
app.post('/create',async function(req,res){
    let {name,email,image} = req.body;
    let createUser = await userModel.create({
        name:name,
        email:email,
        image:image,
    })
    res.send(createUser);
})

app.listen(4000);