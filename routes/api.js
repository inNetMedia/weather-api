const express = require('express'),
    router = express.Router(),
    reqController = require('../controllers/reqController');


router.route('/').get(reqController.getWeather)

router.route('/search').get(reqController.autoFillLocations)

module.exports = router