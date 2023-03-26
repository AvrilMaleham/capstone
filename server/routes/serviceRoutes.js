const express = require('express');
const router = express.Router();

const { getAllServices, getServiceById} = require('../controller/serviceControllers')

//@desc GET all products from db
//@route GET /api/services
//@access Public
router.get('/', getAllServices)

//@desc GET a product by id from db
//@route GET /api/services/:id
//@access Public
router.get('/:id', getServiceById)

module.exports = router; 