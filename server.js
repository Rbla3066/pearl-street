var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var path = require('path');
//var exphbs = require('express-handlebars');//handlebars
//// Sets the handlebars rendering engine. 
//app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
//}));
//
//app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



app.use(express.static(path.join(__dirname+'/public')));

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});