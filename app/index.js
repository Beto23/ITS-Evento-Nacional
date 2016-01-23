/* Frameworks */
var angular = require('angular');
require('angular-ui-router');
require('angular-touch');
require('angular-carousel');

var jQuery = $ = require('jquery');
require('normalize.css/normalize.css');
require('reset.css/reset.css');
require('angular-carousel/dist/angular-carousel.css')
require('./app.styl');

/* App */
var app = angular.module('ITS', ['ui.router','Header','Helpers','OnePage']);

require('./app.config.js')(app);
require('./sections/onePage/')();
require('./helpers/')();


require('./components/header/')();