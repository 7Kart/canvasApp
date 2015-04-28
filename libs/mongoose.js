var mongoose = require('mongoose');
var logger = require('./winston.js')
var config = require('config')

mongoose.connect(config.get("mongoose.connection"));

mongoose.set('debug', config.get("mongoose.debug"));

var db = mongoose.connection;

db.on("open", function(){
	logger.info('mongoose connect')
})

db.on("error", function(){
	logger.error('mongoose connect error')
})

module.exports = mongoose;