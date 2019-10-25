const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const User=require('../models/product');

router.post('/',(req,res,next)=>{
   
    const user=new User({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        author:req.body.author,
        description:req.body.description
        });
        user.save()
        .then(result=>{
            console.log(result);
            res.status(201).json({
                message:"added product details"
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });

    
    });

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling POST request",
    })
})
module.exports=router;