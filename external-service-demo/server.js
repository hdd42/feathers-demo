const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
app.set('json spaces', 2)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let demoProducts= [
    {id:1 , title:'external product 1' , price:55 , quantity:1},
    {id:2, title:'external product 2' , price:111 , quantity:10},
    {id:3, title:'external product 3' , price:40 , quantity:10},
];

app.get('/api/products', (req,res,next) =>{
    res.json(demoProducts)
});

app.post('/api/products', (req,res,next) =>{
    demoProducts.push(req.body);
    res.status(201).json(req.body)
});

app.delete('/api/products/:id', (req,res,next) =>{
    console.log("delete : , ", req.params.id)
    demoProducts = demoProducts.filter(p => p.id != req.params.id)
    res.json({id:req.params.id})
});


app.listen(4000 , ()=>{
    console.log("demo external service listening on http://localhost:4000");
})
