// just a reader interface
// you can implement whatever reader you want
// for instance steamReader, lineReader, ftpReader...
var Reader= function () {
	// reader
	// logs we return at `getLogs`
	this.logs= [];
}

Reader.prototype.read = function(source) {
	// read changelogs from source
};

Reader.prototype.getLogs = function() {
	return this.logs;
};

module.exports= Reader;