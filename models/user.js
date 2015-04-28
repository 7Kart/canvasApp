var mongoose = require('../libs/mongoose');
var crypto = require('crypto-js')


var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type:"String",
		required: true
	},
	hash: {
		type:"String",
		required: true

	},
	salt: {
		type: String,
		//required: true
	}
});

userSchema.virtual('password')
	.set(function(password){
		this._plainPassword = password;
		this.salt = crypto.lib.WordArray.random(128/8);
		this.hash = this.encrypt(password);
	})
	.get(function(){
		return this._plainPassword
	});

userSchema.methods.encrypt = function(password){
	return crypto.PBKDF2(password, this.salt, { keySize: 128/32 });
};

userSchema.methods.checkPassword = function(password){
	return this.encrypt(password).toString()=== this.hash;
}

userSchema.methods.sendForClient = function(){
	delete this.salt;
	delete this.hash;
	return this;
}

var User = mongoose.model("User", userSchema);

module.exports = User;
