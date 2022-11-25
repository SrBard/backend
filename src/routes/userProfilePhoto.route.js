const express = require('express');

const router = express.Router();
const {singleFileUpload} = require('../controllers/userProfilePhoto.controller');
const authGuard = require('../middleware/auth.guard');




//handleMultipartData,
router.post('/userProfilePhotoUpdate', authGuard ,singleFileUpload);



// //create user
//  router.post('/users',  (req,res)=>{
//      const user = userSchema(req.body);
//          user.save()
//          .then((data)=>res.json(data))
//          .catch((error)=>res.json({message: error}));
//  });

//get all user
// router.get('/users', (req, res) => {
//         userSchema
//         .find()
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });

// //get a user
// router.get('/users/:id',  (req,res)=>{
//     const { id } = req.params;
//     userSchema
//         .findById(id)
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });

// // update a user
// router.put('/users/:id', (req,res)=>{
//     const {id} = req.params;
//     const {username, email, password, nickname, creatDate } = req.body;
//     userSchema
//         .updateOne({ id }, { $set:{username,email,password,nickname} } )
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });


// router.delete('/users/:id', (req,res)=>{
//     const {id} = req.params;
//     userSchema
//         .remove( id )
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message: error}));
// });



module.exports = router;

