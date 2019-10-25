const mongoose=require('mongoose');

const ProductDetailSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{type:String,required:true},
    author:{type:String,require:true},
    description:{type:String,require:true}
});

module.exports=mongoose.model('ProductDetail',ProductDetailSchema);