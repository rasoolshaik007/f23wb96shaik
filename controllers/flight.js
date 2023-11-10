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

// Handle flight create on POST.
exports.flight_create_post = async function(req, res) {
console.log(req.body)
let document = new flight();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"flight_type":"goat", "cost":12, "size":"large"}
document.flight_name = req.body.flight_name;
document.cost = req.body.cost;
document.baggage = req.body.baggage;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific flight.
exports.flight_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await flight.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

//Handle flight update form on PUT.
exports.flight_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await flight.findById( req.params.id)
// Do updates of properties
if(req.body.flight_name) toUpdate.flight_name = req.body.flight_name;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.baggage) toUpdate.baggage = req.body.baggage;
if(req.body.checkboxbaggage) toUpdate.baggage = true;
else toUpdate.same = false;
    
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
    
    

// List of all flights
// exports.flight_list = function(req, res) {
// res.send('NOT IMPLEMENTED: flight list');
// };
// GET request for one costume.
//router.get('/flight/:id', costume_controller.costume_detail);
// for a specific flight.
// Handle flight create on POST.
// exports.flight_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: flight create POST');
// };
// Handle flight delete form on DELETE.
exports.flight_delete = function(req, res) {
res.send('NOT IMPLEMENTED: flight delete DELETE ' + req.params.id);
};
// Handle flight update form on PUT.
/*exports.flight_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: flight update PUT' + req.params.id);
};*/
