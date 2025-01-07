const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    session({
        secret:'first session',
        resave:false,
        saveUninitialized:true,
        cookie:{secure:false}
    })
);

// router to set session
app.get('/set-session',(req,res)=>{
    req.session.username = 'dhruvi';
    res.send('Session data has been set!!');
})

// route to get session data
app.get('/get-session',(res,req)=>{
    if(req.session.username){
        res.send(`Session data : ${req.session.username}`);
    }
    else{
        res.send('no session data found');
    }
});

// destory
app.get('/destroy-session', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to destroy session.');
      } else {
        res.send('Session destroyed successfully.');
      }
    });
  });


app.listen(8000,(req,res)=>{
    console.log('working');  
})