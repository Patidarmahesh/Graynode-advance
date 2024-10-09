const express = require('express');
const requireSignIn = require('../MiddleWare/authMiddleWare');
const { createProduct, getAllProductController, deleteProductController, orderController } = require('../Controller/productController');

const createProductRoute = express.Router();

// ________|CREATE POST ROUTE|__________
createProductRoute.post('/createproduct',requireSignIn,createProduct);
// ________|CREATE POST ROUTE|___________

// ________|GETALLPRODUCT GET ROUTE|_________
createProductRoute.get('/getallproduct',getAllProductController);
// ________|GETALLPRODUCT GET ROUTE|_________

// ________|DELETEPRODUCT DELETE ROUTE|_________
createProductRoute.delete('/deleteproduct/:id',requireSignIn,deleteProductController);
// ________|DELETEPRODUCT DELETE ROUTE|_________

// ________|GETALLPRODUCT GET ROUTE|_________
createProductRoute.post('/order',orderController);
// ________|GETALLPRODUCT GET ROUTE|_________


module.exports = createProductRoute;
