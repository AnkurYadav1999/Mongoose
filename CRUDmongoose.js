const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecomm')

const ProductSchema = new mongoose.Schema({
   name:String,
   brand:String,
   price:Number,
   category:String
})

const SaveDB = async() => {
 const ProductsModel = mongoose.model('products',ProductSchema)
 let data = new ProductsModel({
    name:"Webcam",
    brand:"cisco",
    price:7000,
    category:"Home Security"
});
 let result = await data.save();
 console.log(result);
}

const updateDB = async() =>{
    const ProductsModel = mongoose.model('products',ProductSchema)
    let data = await  ProductsModel.updateOne(
        {name:"Webcam"},
        {$set:{price:10000}}
    )
    console.log(data);
}

const ReadDB = async() =>{
    const ProductsModel = mongoose.model('products',ProductSchema)
    let data = await  ProductsModel.find()
    console.log(data);
}

const DeleteDB = async() =>{
    const ProductsModel = mongoose.model('products',ProductSchema)
    let data = await  ProductsModel.deleteOne({name:"F9ZS"})
    console.log(data);
}

DeleteDB();
