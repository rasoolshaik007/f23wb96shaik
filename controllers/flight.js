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
res.render('flight', { title: 'Flight Search Results', results: theflights });
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
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};
    
// Handle Flight delete on DELETE.
exports.flight_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await flight.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
      
// Handle a show one view with id specified by query
exports.flight_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await flight.findById( req.query.id)
res.render('flightdetail',{ title: 'Flight Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.flight_create_Page = function(req, res) {
console.log("create view")    
try{
res.render('flightcreate', { title: 'Flight Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

//Handle building the view for updating a costume.
// query provides the id
exports.flight_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await flight.findById(req.query.id)
res.render('flightupdate', { title: 'Flight Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle a delete one view with id from query
exports.flight_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await flight.findById(req.query.id)
res.render('flightdelete', { title: 'Flight Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
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
//exports.flight_delete = function(req, res) {
//res.send('NOT IMPLEMENTED: flight delete DELETE ' + req.params.id);
//};
// Handle flight update form on PUT.
/*exports.flight_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: flight update PUT' + req.params.id);
};*/
