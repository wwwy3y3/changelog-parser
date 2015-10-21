// simply read from string
var StringReader= function () {
	// reader
	// logs we return at `getLogs`
	this.logs= [];
}

StringReader.prototype.read = function(source) {
	// read changelogs from source
};

StringReader.prototype.getLogs = function() {
	return this.logs;
};

module.exports= StringReader;