const express = require('express');
const deviceSchema= require('../models/device.models');
const router = express.Router();




//create user
router.post('/devices',  (req,res)=>{
    const device = deviceSchema(req.body);
        device.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get all user
router.get('/devices', (req,res)=>{
        deviceSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get a user
router.get('/devices/:id',  (req,res)=>{
    const { id } = req.params;
        deviceSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// update a user
router.put('/devices/:id', (req,res)=>{
    const {id} = req.params;
    const {username, email, password, nickname,} = req.body;
        deviceSchema
        .updateOne({ id }, { $set:{username,email,password,nickname} } )
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//delete a device
router.delete('/users/:id', (req,res) => {
    const {id} = req.params;
        deviceSchema
        .remove( id )
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}));
});



module.exports = router;