var express = require('express');
const flight_controllers= require('../controllers/flight');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}

res.redirect("/login");
}
/* GET flights */
router.get('/', flight_controllers.flight_view_all_Page);

//GET request for one flight.
router.get('/flight/:id', flight_controllers.flight_detail);

/* GET detail flight page */
router.get('/detail', flight_controllers.flight_view_one_Page);

/* GET create flight page */
router.get('/create', flight_controllers.flight_create_Page);

// GET request to update Flight.
router.get('/update', secured, flight_controllers.flight_update_Page);

/* GET delete flight page */
router.get('/delete', flight_controllers.flight_delete_Page);


module.exports = router;
