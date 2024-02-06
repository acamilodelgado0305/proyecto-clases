const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
},
{
    timestamps:true
});

module.exports=mongoose.model('client', clientSchema);

