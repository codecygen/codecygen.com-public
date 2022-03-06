// Load Node modules
let express = require('express');
const ejs = require('ejs');
// Initialize Express
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Render static files
app.use(express.static(__dirname + '/public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');

// include environment variable package for port, email and password
const dotenv = require("dotenv");
dotenv.config();

// Port website will run on
const port = process.env.port;
app.listen(port, function() {
	console.log(`Server is running on port ${port}`);
});
// *** GET Routes - Display Pages ***
// Root Route
app.get('/', function(req, res){
	// var listnames = ["codecygen.com", "codecygen.com2", "codecygen.com3"];
	// Render index page
	res.render(__dirname + '/views/pages/index.ejs', {
		// EJS variable and server side variable
		// listnames
	});
});

const mail = require(__dirname + '/mail.js');

app.post("/", function(req, res) {

	const email = req.body.email;

	const form = {
		fullName: req.body.fullName,
		company: req.body.company,
		email: email,
		phone: req.body.phone,
		message: req.body.message,
		emailTo: process.env.emailTo,
		emailTitle: `www.codecygen.com, ${email}`
	};

	mail.sendMail(form.fullName, form.company, form.email, form.phone, form.message, form.emailTo, form.emailTitle, function(err, data) {
		if(err) {
			console.log('Internal error');
			console.log(err);
			res.render(__dirname + '/views/pages/failure.ejs');
		} else {
			console.log('Email sent!');
			res.render(__dirname + '/views/pages/success.ejs');
		}
	});
});

app.post('/success', function(req, res) {
	res.redirect('/');
});

app.post('/failure', function(req, res) {
	res.redirect('/');
});
