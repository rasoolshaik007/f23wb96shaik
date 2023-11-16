var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var flight_controller = require('../controllers/flight');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// FLIGHT ROUTES ///
// POST request for creating a Flight.
router.post('/flight', flight_controller.flight_create_post);

// DELETE request to delete Flight.
router.delete('/flight/:id', flight_controller.flight_delete);

// GET request for one Flight.
router.get('/flight/:id', flight_controller.flight_detail);

// PUT request to update Flight.
router.put('/flight/:id', flight_controller.flight_update_put);

// GET request for list of all Flight items.
router.get('/flight', flight_controller.flight_list);


module.exports = router;    
