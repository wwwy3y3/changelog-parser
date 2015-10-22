// simply read from string
var readline = require('readline');
var Promise= require('bluebird');
var stream = require('string-to-stream');
var Collector= require('./lineCollector');

var StringReader= function () {
	// reader
	this.lineCollector= new Collector();
}

StringReader.prototype.read = function(string) {
	// read changelogs from source
	var self = this;
	return new Promise(function(resolve, reject) {
		var rl = readline.createInterface({
		  input: stream(string)
		});

		rl.on('line', function (line) {
		  self.lineCollector.handleLine(line);
		});

		rl.on('close', function () {
			self.lineCollector.EOF();
			resolve(self.lineCollector.log);
		})
	}); 
};

StringReader.prototype.getLogs = function() {
	return this.lineCollector.getLogs();
};

module.exports= StringReader;