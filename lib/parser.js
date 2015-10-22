var semver= require('semver');
var moment= require('moment');
var StringReader= require('./stringReader');
var timeReg= /\((\d+\-\d+\-\d+)\)/;

var Parser= function (mode) {
	this.reader= readerFactory(mode);
	this.logs= [];
}

Parser.prototype.parse = function(source) {
	return this.reader.read(source).get('versions')

	.map(function (log) {
		var match= log.title.match(timeReg);
		return {
			version: log.version,
			date: (match)
				? moment(match[1], 'YYYY-MM-DD').toDate()
				: null,
			log: log.body
		}
	})
};

function readerFactory (mode) {
	if(mode=='string')
		return new StringReader();
	else
		return new StringReader();
}
module.exports= Parser;