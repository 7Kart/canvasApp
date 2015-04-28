var passport = require('passport')
var LocalStrategy  = require('passport-local').Strategy;

var User = require('../models/user.js');

passport.use('local-login', new LocalStrategy({
	    usernameField: 'username',
		passwordField: 'password'
	},
	function(username, password, done){		
		User.findOne({username:username}, function(err, user){			
			if(err){
				return done(err)
			}
			if(!user){
				return done(null, false, "There is not such user")
			}
			if(!user.checkPassword(password)){
				return done(null, false, "Wrong password")
			}
			return done(null, user.sendForClient())
		})	
	}
));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

module.exports = passport;