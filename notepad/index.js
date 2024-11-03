const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) {
            console.error(err);
            return res.status(500).send("Error reading files.");
        }
        console.log(files);
        res.render("index", { files: files });
    });
});
// read the file data
app.get('/file/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render('show',{filename:req.params.filename ,filedata:filedata})        
    })
});

// edit file name
app.get('/edit/:filename', function (req, res) {
   res.render('edit',{filename : req.params.filename})
});

app.post('/edit', function (req, res) {
   console.log("edit - ",req.body);
   fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}.txt`,function (err) {
    res.redirect("/");
   }); 
});

app.post('/delete', function (req, res) {
    console.log("delete - ",req.body.filename);
    const filepath = `./files/${req.body.filename}`;
    fs.unlink(filepath,function(err){
        if(err){
            console.error("error -",err);
            return res.status(500).send("error deleting file");   
        }
        res.redirect("/");
    })
});


// create the file
app.post('/create', function (req, res) {
    console.log("create - ",req.body);
    const filename = `${req.body.title.split(' ').join('')}.txt`;
    fs.writeFile(`./files/${filename}`, req.body.details, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send("Error creating file.");
        }
        res.redirect('/');
    });
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
