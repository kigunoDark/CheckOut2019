const express = require('express');
const router = express.Router();
const landingControll = require('../controllers/landingController');


router.get('/',landingControll.getLanding);

module.exports = router;