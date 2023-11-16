var express = require('express');
const flight_controllers= require('../controllers/flight');
var router = express.Router();
/* GET flights */
router.get('/', flight_controllers.flight_view_all_Page);

//GET request for one flight.
router.get('/flight/:id', flight_controllers.flight_detail);

/* GET detail flight page */
router.get('/detail', flight_controllers.flight_view_one_Page);

/* GET create flight page */
router.get('/create', flight_controllers.flight_create_Page);

// GET request to update Flight.
router.get('/update', flight_controllers.flight_update_Page);

/* GET delete flight page */
router.get('/delete', flight_controllers.flight_delete_Page);


module.exports = router;
