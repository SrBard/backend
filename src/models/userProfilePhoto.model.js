const { object } = require('joi');
const mongoose = require('mongoose');
const userModel = require('./user.model');

//id's are given for default by mongodb


const userProfilePhotoSchema= mongoose.Schema( {
    userID:{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: false,
        unique: true,
        
    },
    imageURL:{
        type: String,
        required:true,
        
        
    },
    createdAt:{
        type: Date,
        default: Date.now()

    },
    
    
    



 });


 module.exports = mongoose.model('userProfilePhoto', userProfilePhotoSchema,'userProfilePhoto');