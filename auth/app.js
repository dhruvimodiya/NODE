const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// set cookie
// app.get('/',function(req,res){
//     // res.cookie('name',"dhruvi");
//     res.send("done");
// });

// set password encrypt
// app.get('/',function(req,res){
//     // res.cookie('name',"dhruvi");
//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash("dhruvi",salt,function(err,hash){
//             console.log(hash);  
//         })
//     })
//     res.send("done");
// });

// for decrypt
// app.get('/',function(req,res){
//     bcrypt.compare("dhruvi","$2b$10$A.UVVL6hHUeMJLFozDr4DeenByydjcppLc0esDENJJrYrI5D7Z6.O",function(err,result){
//         console.log(result);
        
//     })
// });


// jwt
app.get('/',function(req,res){
   let token = jwt.sign({email:"dhruvi123@gmail.com"},"secret")
    // console.log("token -",token);
    res.cookie("token",token);
    res.send("done");
    
});

app.get('/read',function(req,res){
        console.log(req.cookies);
        // res.send("read page done");
        let data = jwt.verify(req.cookies.token,"secret")
        console.log("data - ",data);
        
    });


// read cookie
// app.get('/read',function(req,res){
//     // console.log(req.cookies);
//     res.send("read page done");
// });

app.listen(4000);