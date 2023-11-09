var flight = require('../models/flight');

// List of all flights
exports.flight_list = async function(req, res) {
 try{
 theflights = await flight.find();
 res.send(theflights);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

// VIEWS
// Handle a show all view
exports.flight_view_all_Page = async function(req, res) {
    try{
    theflights = await flight.find();
    res.render('flight', { title: 'flight Search Results', results: theflights });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// List of all flights
// exports.flight_list = function(req, res) {
// res.send('NOT IMPLEMENTED: flight list');
// };
// for a specific flight.
exports.flight_detail = function(req, res) {
res.send('NOT IMPLEMENTED: flight detail: ' + req.params.id);
};
// Handle flight create on POST.
exports.flight_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: flight create POST');
};
// Handle flight delete form on DELETE.
exports.flight_delete = function(req, res) {
res.send('NOT IMPLEMENTED: flight delete DELETE ' + req.params.id);
};
// Handle flight update form on PUT.
exports.flight_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: flight update PUT' + req.params.id);
};
