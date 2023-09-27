const mongoose = require('mongoose');

const items = new mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{timestamps: true})

module.exports = mongoose.model('items',items)