const express = require('express');


//const bodyParser = require('body-parser');

const userProfilePhotoRoutes = require('./routes/userProfilePhoto.route');
const deviceRoutes = require('./routes/device.route');
const authRoutes = require('./routes/auth.routes');



//settings
const app = express();
const port = process.env.port || 9000;



//middleware

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static(__dirname));

//app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//app.use('/api', userRoutes);
app.use('/api', deviceRoutes);
app.use('/api', authRoutes); 
app.use('/api', userProfilePhotoRoutes) ;



// dbConnection
require('./database');



//app.use('/api', express.static(path.join(__dirname, 'uploads')));
app.listen(9000,()=>console.log('server listening on port', port));
