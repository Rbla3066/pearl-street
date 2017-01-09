// create reusable transporter object using the default SMTP transport
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
    	user: 'rbla4655@gmail.com',
    	pass: 'xsufskonbopwfiit'
	}
});

module.exports = function(app){

	app.get('/api/contact/:name/:email/:message', function(req, res){
		var name = req.params.name;
		var email = req.params.email;
		var message = req.params.message;
		transporter.sendMail({
          from: email,
          to: 'rbla4655@gmail.com',
          subject: name + ' from pearlstreetled.com',
          text: message + '\n \n' + email
        }, function(err, success){
          if(err) return res.json(false);
          return res.json(true);
        });
	})
}