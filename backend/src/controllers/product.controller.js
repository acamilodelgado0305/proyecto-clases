const productsCtrl={};
const productModel= require('../models/product');


//---------------Obtener Productos ///////

productsCtrl.getProducts=async(req, res)=>{
    const products=await productModel.find();
    res.json(products);
};

//----------------Obtener 1 producto

productsCtrl.getProduct=async(req, res)=>{
    const product=await productModel.findById(req.params.id);
    res.json(product);
};


//------------Crear Producto

productsCtrl.createProduc=async(req,res)=>{
    const{_id,nombre,precio,cantidad}=req.body;
    const newProduct= new productModel({
        _id:_id,
        nombre:nombre,
        precio:precio,
        cantidad:cantidad,
    });
    await newProduct.save();
    res.json({message:['Product Saved']})
};

//-------------Actualizar producto
productsCtrl.UpdateProduct=async(req,res)=>{
    const{nombre,precio,cantidad}=req.body;
    await productModel.findByIdAndUpdate(req.params.id,{
        nombre:nombre,
        precio:precio,
        cantidad:cantidad,
    });
    res.json({message:['Product Updated']})
};


//Eliminar producto

productsCtrl.deleteProduct=async(req,res)=>{
    await productModel.findByIdAndDelete(req.params.id);
    res.json({message:['Product Delete']})

}

module.exports=productsCtrl;