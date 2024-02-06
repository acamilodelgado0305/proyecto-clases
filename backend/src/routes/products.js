//importamos router desde express
const{Router}=require("express");

//almacenamos Router en router
const router=Router();

//importamos los metodos desde controllers

const{getProducts,getProduct,createProduc,UpdateProduct,deleteProduct} =  require('../controllers/product.controller');
const { route } = require("../app");

// asociar o enrutar a cada direccon si esta vacia o esta identificada
router
    .route("/")
    .get(getProducts)
    .post(createProduc)


router
    .route("/:id")
    .get(getProduct)
    .put(UpdateProduct)
    .delete(deleteProduct)

module.exports=router;
