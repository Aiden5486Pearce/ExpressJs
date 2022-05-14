const http = require('http');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
//const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product', (req,res,next)=>{
    console.log('Hi from here');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="title"><button type="submit">Add Product</buhtton></form>');
    
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req,res,next)=>{
    res.send('<h1>Hello from aiden</h1>');
});
app.listen(3000);
