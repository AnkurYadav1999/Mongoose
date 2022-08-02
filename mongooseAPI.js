const express = require('express');
require('./DBconnection')
const ProductModel = require('./Productschema');
const app = express();
app.use(express.json());

app.post('/create',async(req,res)=>{
    let data = new ProductModel(req.body)
    let result = await data.save();
    res.send(result);
})

app.get('',async(req,res)=>{
    let data = await ProductModel.find()
    res.send(data)
})

app.put('/update', async (req,res)=>{
    let data = await ProductModel.updateOne(
        {name:"VIK"},
        {$set:req.body}
    )
    res.send(data)
})

app.delete('/delete',async(req,res)=>{
    let data = await ProductModel.deleteOne(req.body)
    res.send(data);
})

// Search API
app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data = await ProductModel.find(
        {
            "$or":[
                {"category":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data)
})

app.listen(4000)

