const express=require('express');
const app=express();
const morgan =require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors = require('cors');

const signup=require('./api/routes/SignIn'); 
const product=require('./api/routes/product');
const details=require('./api/routes/productDetails');


mongoose.connect('mongodb://127.0.0.1:27017/user',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
 },function(err){

    if(!err) console.log('Successfully Connected');
  
    console.log(mongoose.connection.host);
  
    console.log(mongoose.connection.port);
  }

 );

 app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.use('/user',signup);
app.use('/product',product);
app.use('/admin',details);






app.use((req,res,next)=>{
   res.status(200).json({
    error:{
        message:"Not found"
    }
   });
});
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:"error in app.js"
        }
    });
});

module.exports=app;