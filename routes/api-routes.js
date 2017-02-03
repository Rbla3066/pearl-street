// create reusable transporter object using the default SMTP transport
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
    	user: 'rbla4655@gmail.com',
    	pass: 'xsufskonbopwfiit'
	}
});
var mongojs = require('mongojs');
var db = mongojs('mongodb://pearlstreetled:lights55@ds037272.mlab.com:37272/heroku_rd83pvs3', ['careers']);
var request = require('request');
var fs = require('fs');
var moment = require('moment');

module.exports = function(app){

	app.get('/api/contact/:name/:email/:message', function(req, res){
		var name = req.params.name;
		var email = req.params.email;
		var message = req.params.message;
		if(!name || !email || !message) return res.json(false);
		transporter.sendMail({
          from: email,
          to: 'info@pearlstreetled.com',
          subject: name + ' from pearlstreetled.com',
          text: message + '\n \n' + email
        }, function(err, success){
          if(err) return res.json(false);
          return res.json(true);
        });
	});


	app.get('/api/careers', function(req, res){
		db.careers.find({}, function(err, data){
			if(err) return res.json(null);
			return res.json(data);
		})
	})

	app.get('/api/careers/get/:name', function(req, res){
		var name = req.params.name;
		db.careers.find({job_title: name}, function(err, data){
			if(!data[0]) return res.json(null);
			return res.json(data[0]);
		})
	})

	app.post('/api/careers/add', function(req, res){
		var job = req.body;
		var date = moment().format('MMM DD, YYYY');
		job['date_posted'] = date;
		db.careers.insert(job, function(err){
			if(err) return res.json(err);
			return res.json(null);
		})
	})
	app.post('/api/careers/delete', function(req, res){
		var job = req.body;
		db.careers.remove(job, function(err){
			if(err) return res.json(err);
			return res.json(null);
		})
	})
}