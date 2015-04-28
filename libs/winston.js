var winston = require('winston');


var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			colorize: true
		}),

		//new (winston.transports.File)({ filename: 'somefile.log' })
	]
});

module.exports = logger;