const mongoose = require('mongoose')

const connect =()=>{
    return mongoose.connect('mongodb+srv://efron:8138834116@cluster0.r7bkqev.mongodb.net/smartButler?retryWrites=true&w=majority')
}
module.exports = connect;
