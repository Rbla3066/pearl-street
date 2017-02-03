var path = require("path");

module.exports = function(app){
	app.get('/about', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/about.html'));
	});
	app.get('/services', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/services.html'));
	});
	app.get('/contact', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/contact.html'));
	});
	app.get('/projects', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/projects.html'));
	});
	app.get('/careers', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/careers.html'));
	});
	app.get('/admin/password', function(req, res){
		res.sendFile(path.join(__dirname + '/../admin/admin.html'));
	})
	app.get('/projects/:project', function(req, res){
		var project = req.params.project;
		res.sendFile(path.join(__dirname + '/../public/projects-'+project+'.html'));
	});

	
};
