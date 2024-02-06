const express = require('express');
const cors= require("cors");
const app= express();

// iniciamos el servidor 
// settings
app.set('port', process.env.PORT || 7000);


//middlewares
app.use(cors());
app.use(express.json());


//routes

app.use('/clients',require('./routes/clients'));
app.use('/products',require('./routes/products'));

module.exports=app;