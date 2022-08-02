const mongoose = require('mongoose');

const main = async() => {
 await mongoose.connect('mongodb://localhost:27017/ecomm')
 const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number
 })
 const ProductsModel = mongoose.model('products',ProductSchema)
 let data = new ProductsModel({name:"ZSLV2",price:20000});
 let result = await data.save();
 console.log(result);
}

main();