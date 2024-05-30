
const express = require('express');
const {  getOrderController } = require('../controller/user');

const router = express.Router()

//all routes

router.post('/get-user-order-status',getOrderController)
module.exports=router