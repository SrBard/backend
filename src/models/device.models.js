const {schema, model, Schema, SchemaType} = require('mongoose');


//id's are given for default by mongodb




const pcSchema = new Schema({
    deviceTag:{
        type: String ,
        required: true,        
    },
    state:Boolean,
    invoice:String,
    userName:{
        type: String,
        
    },
    area:{
        type: String,

    },
    location:{
        type: String,

    },
    serviceTag:{
        type: String,
        required: true,
        unique: true

    },
    specs:[{ram: Number, processor: String, storage: String}],
    registrationDate:{
        type: Date,
        default: () => Date.now(),
    },
    arrivalDate: Date,
    deliveryDate:Date,
    changeDate:{
        type: Date,
        default: () => Date.now() 
    },
    droppedDate:{
        type: Date,
        default: () => Date.now() 
    },

    
    




});



 const laptopSchema = new Schema({
    deviceTag:{
        type: String,
        required: true,        
    },
    state:Boolean,
    invoice:String,
    userName:{
        type: String,
        
    },
    area:{
        type: String,

    },
    location:{
        type: String,

    },
    serviceTag:{
        type: String,
        unique: true,
    },
    changerSeries:{
        type: String,
        required: true
    },
    specs:[{ram: Number, processor: String, storage: String, model:String}],
    registrationDate:{
        type: Date,
        default: () => Date.now(),
    },
    arrivalDate: Date,
    deliveryDate: Date,
    changeDate:{
        type: Date,
        default: () => Date.now() 
    },
    droppedDate:{
        type: Date,
        default: () => Date.now() 
    },
    
    



});

const printerSchema = new Schema({
    deviceTag:{
        type: String,
        required: true
    },
    state:Boolean,
    area: String,
    location: String,
    ip: String,
    supplier: {
        type: String,
        required: true,
    },
    
    registrationDate: {
        type: Date,
        default: () => Date.now()
    },

    
    
    
    
    




});

const labelerSchema = new Schema({
    deviceTag:{
        type: String,
        unique: true
    },
    state:Boolean,
    invoice: String,
    area:{
        type: String
    },
    location: String,
    serviceTag: String,
    registrationDate: {

    },
    arrivalDate:{
        type: Date,
        default: () => Date.now()
    },
    deliveryDate:Date,
    droppedDate:{
        type: Date,
        default: () => Date.now()
    },
    
    
    



});

//module.exports = model('imgFile', deviceImageSchema,'images');
module.exports = model('pc',pcSchema,'devices');
module.exports = model('laptop',laptopSchema,'devices');
module.exports = model('printer',printerSchema,'devices');
module.exports = model('labeler',labelerSchema,'devices');