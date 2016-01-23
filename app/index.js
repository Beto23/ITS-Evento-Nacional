/* Frameworks */
var angular = require('angular');
require('angular-ui-router');

var jQuery = $ = require('jquery');
require('normalize.css/normalize.css');
require('reset.css/reset.css');
require('./app.styl');

/* App */
var app = angular.module('ITS', ['ui.router','Helpers','OnePage']);

require('./app.config.js')(app);
require('./sections/onePage/')();
require('./helpers/')();
