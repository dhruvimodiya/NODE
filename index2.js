const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8')) 
const products = data.products;

const server = http.createServer((req,res)=>{

    console.log(req.url)
    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2]
        const product = products.find(p=>p.id===(+id))
        console.log(product)
        res.setHeader('content-type','Text/Html')
            let modifiedindex = index.replace('**title**',product.title).replace('**url**',product.thumbnail).replace('**price**',product.price)
            res.end(modifiedindex);
    }
    switch(req.url){
        case '/':
            res.setHeader('content-type','Text/Html')
            res.end(index);
            break;
        case '/api':
            res.setHeader('content-type','application/json')
            res.end(JSON.stringify(data));
            break;
            return;

        default:
            res.writeHead(404)
            res.end();  
    }
    console.log('server start')
    res.setHeader('dummy','dummyvalue')
    res.end(index);
})
server.listen(8080)