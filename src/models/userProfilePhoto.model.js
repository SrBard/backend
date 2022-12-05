const { object } = require('joi');
const mongoose = require('mongoose');
const userModel = require('./user.model');

//id's are given for default by mongodb


const userProfilePhotoSchema= mongoose.Schema( {
    userID:{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: false,
        unique: false,
        
    },
    imageURL:{
        type: String,
        required:true,
        unique: false        
        
    },
    createdAt:{
        type: Date,
        default: Date.now()

    },
    
    
    



 });


 module.exports = mongoose.model('userProfilePhoto', userProfilePhotoSchema,'userProfilePhoto');