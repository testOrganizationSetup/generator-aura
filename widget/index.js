'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = WidgetGenerator;

function WidgetGenerator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.argument('name', { type: String, required: true });
}

util.inherits(WidgetGenerator, yeoman.generators.Base);

WidgetGenerator.prototype.creatWidgetFiles = function creatWidgetFiles() {
  this.template('widgets/main.js', 'app/widgets/' + this.name + '/main.js');
  // TODO: generate test
};