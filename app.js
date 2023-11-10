var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flight = require("./models/flight");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var flightRouter = require('./routes/flight');
var resourceRouter = require('./routes/resource');

require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/flight', flightRouter);
app.use('/resource',resourceRouter);
app.use();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})
//We can seed the collection if needed on
async function recreateDB(){
  
await flight.deleteMany();
let instance1 = new flight({flight_name:"Air India",cost:5000,baggage:46});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

let instance2 = new flight({flight_name:"Emirates",cost:6000,baggage:72});
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new flight({flight_name:"Indigo",cost:4000,baggage:52});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();
}
// List of all Costumes
exports.flight_list = async function(req, res) {
try{
  console.log(`Triggered`);
theflight = await flight.find();
res.send(theflight);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;