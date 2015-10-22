var changeLogParser= require('../');
var path= require('path');
var md= require('fs').readFileSync(path.join(__dirname, 'changelog2.md'), 'utf8');
changeLogParser.parseString(md)
.then(function (logs) {
	console.log(logs)
})