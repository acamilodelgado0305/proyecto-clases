const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
},
{
    timestamps:true
});

module.exports=mongoose.model('producto', productSchema);
