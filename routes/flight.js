var express = require('express');
const flight_controllers= require('../controllers/flight');
var router = express.Router();
/* GET flights */
router.get('/', flight_controllers.flight_view_all_Page );

//GET request for one flight.
router.get('/flight/:id', flight_controllers.flight_detail);
module.exports = router;
