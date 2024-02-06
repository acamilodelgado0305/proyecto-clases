const mongoose= require('mongoose');
require('dotenv').config();

const URI= process.env.MONGODB_URI;

mongoose
    .connect(URI)
    .then(()=>console.log("Conectado a Mongo supermercado"))
    .catch((error)=>console.error(error));