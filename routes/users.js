var express = require('express');
var router = express.Router();
var passport = require('../libs/passport')
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/auth', function(req, res, next){
	if (req.isAuthenticated()){
		User.findOne({_id:req.session.passport.user}, function(err, user){
			if(err){return next(err)}
			if(user){
				res.send({
					code:200,
					user:user
				})
			}else{
				res.send({
					code:500,
					message:"You are not authorized"
				})
			}
		})
	}else{
		res.send(null);
	}
});

router.post('/login', function(req, res, next){
	  	passport.authenticate('local-login', function(err, user, info) {	    	
	    	if (err) { return next(err); }
	    	if (!user) {
    			console.log('user', user)
    			console.log('info', info)
    			res.send({
    				code:500,
    				message:info
    			});
	    	}
	    	if(user){
	    		req.logIn(user, function(err) {
      				if (err) { return next(err); }
      				res.send({
      					code:200,
      					user:user
      				});      				
    			});
	    	}		    
  		})(req, res, next);
})

router.post('/registrate', function(req, res, next){
	if(req.body.password === req.body.passwordRepeat){
		console.log('REGISTRATE', req.body)
		User.findOne({username:req.body.username}, function(err, user){
			if(err) return next(err);
			if(user){
				console.log("HERE")
				res.send({					
					code:500,
					message:"User "+user.username+" already exists"
				})
			}else{
				User.create(req.body, function(err, user){
					if (err) next(err);
					if (!user){
						res.send({							
							code:500,
							message:"user create error"
						})
					}else{
						passport.authenticate('local-login', function(err, user, info) {	    	
					    	if (err) { return next(err); }
					    	if (!user) {
				    			res.send({				    				
				    				code: 500,
				    				message: info
				    			});
					    	}
					    	if(user){
					    		req.logIn(user, function(err) {
				      				if (err) { return next(err); }
				      				res.send({
				      					code:200,
										user:user
				      				});
				    			});
					    	}		    
				  		})(req, res, next);
					}
				})
			}
		});
	}else{
		res.send({
			code:400,
			error:"password don't match"
		})
	}
});

router.post("/logout", function(req, res, next){
	req.logout();
	res.send(true);
})

module.exports = router;



