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
      res.send(createUser);
    });
  });
});



// logout
app.get('/logout',function(req,res){
    res.cookie("token","")
    res.redirect("/");
    console.log("cookie close");
    
})

app.listen(4000);
