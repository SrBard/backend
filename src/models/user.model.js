const mongoose = require('mongoose');

//id's are given for default by mongodb


const userSchema= mongoose.Schema( {
    userName:{
        type: String,
        required: false,
        lowercase:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
        lowercase:true
    },
    password:{
        type: String,
        required: true
        
    },
    
    createdAt:{
        type: Date,
        default: Date.now()

    }

 });

 module.exports = mongoose.model('users', userSchema,'users');
 //module.exports = mongoose.model('image', userImageSchema,'images');