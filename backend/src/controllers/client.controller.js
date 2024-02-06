///CONTROLLERS O METODOS DE CLIENTE/////

//Creamos un variable vacia que almacena todos los metodos que voy a crear para luego exportarlos en clientCtrl
const clientsCtrl={};
const clientModel= require('../models/client');

//-------Obtener Clientes-----------------
clientsCtrl.getClients = async(req,res)=>{
    const Clients= await clientModel.find();
    res.json(Clients);
};

//-------Obtener cliente-------------------

clientsCtrl.getClient = async(req,res)=>{
    const Clients= await clientModel.findById(req.params.id);
    res.json(Clients);
};


//---------Crear Cliente


clientsCtrl.createClient=async(req,res)=>{
    const {_id,nombre,apellido,direccion,telefono,correo}=req.body;
    const newClient= new clientModel({
        _id:_id,
        nombre:nombre,
        apellido:apellido,
        direccion:direccion,
        telefono:telefono,
        correo:correo
    });
    await newClient.save();
    res.json({message:['Client Saved']})
};
//Editar Cliente

clientsCtrl.updateClient= async(req,res)=>{
    const {nombre,apellido,direccion,telefono,correo}=req.body;
    await clientModel.findByIdAndUpdate(req.params.id,{
        nombre:nombre,
        apellido:apellido,
        direccion:direccion,
        telefono:telefono,
        correo:correo
    });
    res.json({message:['Client Updated']})  
};


//---Eliminar Cliente

clientsCtrl.deleteClient=async(req,res)=>{
    await clientModel.findByIdAndDelete(req.params.id)
    res.json({message:['Client Delete']})
};

module.exports=clientsCtrl;