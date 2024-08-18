const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
      
    }
    


},{versionKey:false})


const Member = mongoose.model('Member',memberSchema)

module.exports = Member