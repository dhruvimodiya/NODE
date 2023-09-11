const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8')) 
const products = data.products;

const express =require('express');
const morgan = require('morgan');
const server = express();

//bodyparser
server.use(express.json());
//morgan
server.use(morgan('default'))
server.use(express.static('public'));

//API

//product

//create POST API /products  C R U D 
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
})

//read GET / products
server.get('/products', (req,res) => {
    res.json(products);
})

//read GET / products/:id
server.get('/products/:id',(req,res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
    res.json(product);
})

//upate PUT / products/:id
server.put('/products/:id',(req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body,id : id})
    res.status(201).json();
})

//upate PATCH / products/:id
server.patch('/products/:id',(req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
})

//delete DELETE / products/:id
server.delete('/products/:id',(req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
})

server.get('/demo',(req,res)=>{
    res.status(201).send('<h1>hello</h1>')
    // res.sendStatus(404);
    // res.json(products)
    // res.sendFile('/node/index.html')
})

server.listen(8080,()=>{
    console.log('server started')
});
