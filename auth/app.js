const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});

// create user
app.post("/create", function (req, res) {
  let { username, email, password, age } = req.body;

  // create password hashing
  bcrypt.genSalt(10, (err, salt) => {
    // console.log(salt);
    bcrypt.hash(password, salt, async (err, hash) => {
      let createUser = await userModel.create({
        username,
        email,
        password :hash,
        age,
      });

      let token = jwt.sign({email},"shhhhh");
      res.cookie("token",token);
      res.redirect("login");
    });
  });
});

// login
app.get('/login',function(req,res){
  res.render("login")
})
app.get('/home',function(req,res){
  res.render("home")
})
app.get('/error',function(req,res){
  res.render("error")
})

app.post('/login',async function(req,res){
  let user = await userModel.findOne({email:req.body.email});
  if(!user) return res.send("somthing is wrong");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    console.log(result);
    if (result) {
      let token = jwt.sign({ email: user.email }, "shhhhh");
      res.cookie("token", token);
      res.redirect("home"); // Redirect to the home route
    } else {
      res.send("Something is wrong");
    }
  });
})

// logout
app.get('/logout',function(req,res){
    res.cookie("token","")
    res.redirect("/");
    console.log("cookie close");
    
})

app.listen(4000);
