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
var db = mongojs('pearl_street', ['pearl_street', 'existing_fixtures', 'led_fixtures']);
var image_downloader = require('image-downloader');
var download = require('downloadjs');
var request = require('request');
var fs = require('fs');

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
	app.get('/api/projects', function(req, res){
		db.projects.find({}, function(err, data){
			res.json(data);
		})
	})
	/*app.get('/handle/:projectname', function(req, res){
		var projectUrl = req.params.projectname;
		db.projects.find({project_url: projectUrl}, function(err, data){
			if(err) return res.json("Error: " + err);
			db.projects.find().sort({position: 1}, function(err, data2){
				if(err) return res.json("Error: " + err);
				var project = data[0];
				project.list = data2;
				res.render('index', {project, title: project.project_name});
			})
		})
	})*/
	app.get('/api/existing-fixtures', function(req, res){
		db.existing_fixtures.find({}, function(err, data){
			if(err) return res.json("Error: "+ err);
			return res.json(data);
		})
	})
	app.get('/api/led-fixtures', function(req, res){
		db.led_fixtures.find({}, function(err, data){
			if(err) return res.json("Error: "+ err);
			return res.json(data);
		})
	})
	/*app.post('/api/image', function(req, res){
		//var image = req.files.projectPhoto;
		console.log(req.files)
		res.json(req.route.stack)
	})*/
}