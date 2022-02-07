const express = require('express');
const { getProduct, getOneProduct, addProducts, deleteProducts, editProducts } = require('../controllers/product.controllers');
const router = require('./user');



router.get('/get_products',getProduct);
router.get('/get_oneproducts/:id',getOneProduct);
router.post('/addproducts',addProducts);
router.delete('/delete_product/:id',deleteProducts);
router.put('/edit_product/:id',editProducts);


module.exports=router;