var semver = /\[?v?([\w\d\.-]+\.[\w\d\.-]+[a-zA-Z0-9])\]?/;
var EOL= require('os').EOL;
var LineCollector= function () {
	this.current= null;
	this.log= { versions: [] };
}

LineCollector.prototype.handleLine = function(line) {
	var self= this;
	var log= self.log;

	// skip line if it's a link label
	if (line.match(/^\[[^\[\]]*\] *?:/)) return

	// set title if it's there
	if (!log.title && line.match(/^# ?[^#]/)) {
		log.title = line.substring(1).trim()
		return
	}

	// new version found!
	if (line.match(/^## ?[^#]/)) {
		if (self.current && self.current.title) self.pushCurrent()

		self.current = versionFactory()

		if (semver.exec(line)) self.current.version = semver.exec(line)[1]

		self.current.title = line.substring(2).trim()

		return
	}

	// deal with body or description content
	if (self.current) {
		self.current.body += line + EOL
	} else {
		log.description = (log.description || '') + line + EOL
	}
};

LineCollector.prototype.pushCurrent = function() {
	this.current.body = clean(this.current.body)
	this.log.versions.push(this.current)
};

LineCollector.prototype.EOF = function() {
	this.pushCurrent();
	var log= this.log;
	log.description = clean(log.description)
    if (log.description === '') delete log.description;
};

function versionFactory () {
  return {
    version: null,
    title: null,
    body: ''
  }
}

function clean (str) {
  if (!str) return ''

  // trim
  str = str.trim()
  // remove leading newlines
  str = str.replace(new RegExp('[' + EOL + ']*'), '')
  // remove trailing newlines
  str = str.replace(new RegExp('[' + EOL + ']*$'), '')

  return str
}

module.exports= LineCollector;