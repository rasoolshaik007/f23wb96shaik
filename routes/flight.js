var express = require('express');
const flight_controlers= require('../controllers/flight');
var router = express.Router();
/* GET flights */
router.get('/', flight_controlers.flight_view_all_Page );
module.exports = router;
