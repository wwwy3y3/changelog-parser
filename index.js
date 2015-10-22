var Parser= require('./lib/parser');

// parser
exports.Parser= Parser;

// parse string
exports.parseString= function (content) {
  var parser= new Parser('string');
  return parser.parse(content);
}