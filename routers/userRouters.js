const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/checkout-map', userController.getMapPage);
router.post('/login', userController.postMapUser);

module.exports = router;
