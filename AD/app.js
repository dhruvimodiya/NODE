const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/posts");

app.get("/",function(req,res){
    res.send("hey")
})

app.get("/create",async function(req,res){
    let user = await userModel.create({
        username:"dhruvimodiya",
        age:"25",
        email:"20bmiit077@gmail.com",
    })
    res.send(user)
})
app.get("/post/create",async function(req,res){
    let post = await postModel.create({
        postdata :"i am dhruvimodiya ,i'm 22 years old ",
        user:"6734de7c1fe89fb799379734",
    })

    let user = await userModel.findOne({_id:"6734de7c1fe89fb799379734"});
    user.posts.push(post._id)
    await user.save();
    res.send({
        post,user
    })
})

app.listen(4000);