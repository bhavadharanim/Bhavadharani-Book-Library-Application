const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const User=require('../models/productDetails');

router.post('/',(req,res,next)=>{
   
    const user=new User({
        _id:new mongoose.Types.ObjectId(),
        title:req.body.title,
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
    const user=new User({
        _id:new mongoose.Types.ObjectId(),
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
        });
        User.find()
        .then(result=>{
            res.status(200).json({
                output:result
                
            })
        })
    
})

router.delete("/:_id",(req,res,next)=>{
    User.remove({_id:req.params._id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"User deleted",
            output:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
})


module.exports=router;