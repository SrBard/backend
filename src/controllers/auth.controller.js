const userSchema = require('../models/user.model');
const cache = require('../utils/cache');
const jwtConfig = require('../config/jwt');
const jwt = require('../utils/jwt');
const bcrypt = require('bcrypt');
const userProfilePhotoSchema = require('../models/userProfilePhoto.model');

exports.register = async (req, res) => {
    const  imageURL= 'https://res.cloudinary.com/doosaaux9/image/upload/v1666651110/cld-sample.jpg' 
    const isExist = await userSchema.findOne({
        email: req.body.email
    })
    
    console.log(isExist);

    if(isExist) {
        return res.status(400).json({ error: 'Email already exists.' });
        
    }

    if(req.body.password != req.body.confirmPassword ){
        return res.status(400).json({error:'passwords do not match'})
    }
    
    var hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    
    const userData= {
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        
    }

    console.log('aqui si llego');

    
  
      
    const user = userSchema(userData);
          user.save()
          .then((data)=>res.status(200).json(data))
          .catch((error)=>res.json({message: error}));

          
        console.log(user._id); 
    const  userProfilePhotoData= {
            userId: user._id,
            imageURL: imageURL
    }
    const userProfilePhoto =  userProfilePhotoSchema(userProfilePhotoData);
          userProfilePhoto.save();
          
          
    console.log('se entro aqui');   
}

exports.login = async (req, res) => {
    const user = await userSchema.findOne({
        email: req.body.email
    });
    console.log(user.password);
    if (user) {
        const isMatched = await bcrypt.compare(req.body.password, user.password);
        if (isMatched) {
            const token = await jwt.createToken({ _id: user._id });
            
            return res.status(200).json({
                isValid: true,
                accessToken: token,
                tokenType: 'Bearer',
                expiresIn: jwtConfig.ttl
            });
        }
    }
    return res.status(401).json({ error: 'Unauthorized' });
}

exports.getUser = async (req, res) => {
    console.log(req.user);
    const user = await userSchema.findById(req.body._id);
    
    return res.json(user);
}

exports.logout = async (req, res) => { 
    const token = req.token;
    const now = new Date();
    const expire = new Date(req.user.exp);
    const milliseconds = now.getTime() - expire.getTime();
    /* ----------------------------- BlackList Token ---------------------------- */
    await cache.set(token, token, milliseconds);

    return res.json({ message: 'Logged out successfully' });
}