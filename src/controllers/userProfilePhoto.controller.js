//const singleFileUpload = (req, res, next) => {
  //      const file = req.file
    //    .then((data) => res.json(data))
      //  .catch((error)=>res.json({message: error}));
        

//}


const userSchema = require('../models/user.model');

const {handleMultipartData} = require('../helpers/file.helper');
const { cloudinary } = require('../storage');
const { bool, exist } = require('joi');
const userProfilePhotoSchema = require('../models/userProfilePhoto.model');

require =('../storage');



const singleFileUpload = (req, res,next) => {
  handleMultipartData(req, res, (err) => {
    if (err) {
      res.json({ msgs: err.message });
    }

    const filePath = req.file.path;

    if (!filePath) {
      return;
    }

    let cloud_FileLink;

    cloudinary.v2.uploader.upload(filePath, (error, result) => {
      if (result.secure_url) {

          userProfilePhoto.updateOne({userId: req.body.bodyuserId},{imageURL: result.secure_url})
          .then((data)=>res.json(data))
          .catch((error)=>res.json({message: error}));

      } else {
        res.send(error.message);
      }
    });
  });
};


// const singleFileUpload = (req, res, next) => {
//     handleMultipartData(req, res, async (err) => {
//         if (err) {
//           res.json({ msgs: err.message });
//         }
    
//         res.json({
//           body: req.body,
//           file: req.file,
//         });
//       });
//     }
        
    



module.exports = {
    singleFileUpload,
    
}