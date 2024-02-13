const mongoose = require('mongoose');
const productSchema =new mongoose.Schema({
    "product_name":String,
    "product_price":String,
    "product_image":String
})

module.exports = mongoose.model('product',productSchema)