const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    
    Name: {
        type:String
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        required : true
    },
    role:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        dafault:Date.now
    }
})

module.exports = User = mongoose.model('users',UserSchema)