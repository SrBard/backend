const { options } = require('joi');
const mongoose= require('mongoose');
require('dotenv').config({path:'../.env'});



//mongodb connection
  function connect(){
     mongoose.connect(process.env.MONGODB_URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //useFindAndModify: true
        //useCreateIndex: true,
    })
    .then(()=> console.log('Connect to MongoDB Atlas'))
    .catch((error)=>console.error(error))
    
    };

    function disconnect(){
      mongoose.connection.close()
      .then(()=> console.log('You have disconnected to MongoDB Atlas'  ))
      .catch((error)=>console.error(error))
    }

module.export = connect();
//module.export = disconnect();
