const multer = require('multer');
const path = require('path');
//const req = require('express/lib/request');
//const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '/.uploads/')), // cb -> callback
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single('image');


// const filefliter = (req, file, cb) =>{
//     if (file.mimetupe === 'image/png' || file.mimetype === 'image/jpg'
//         || file.mimetype === 'image/jpeg'   ){
//             cb(null, true)
//         }else{
//             cb(null, false);
//         }

  
// }

//const upload = multer({storage: storage});

module.exports = {handleMultipartData}