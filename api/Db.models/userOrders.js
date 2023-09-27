const mongoose = require('mongoose');

const userOrder = new mongoose.Schema({
    table:{
        type:String,
        required:true
    },
    order:{
        type:Array,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    }
},{timestamps: true})

module.exports = mongoose.model('userOrder',userOrder)