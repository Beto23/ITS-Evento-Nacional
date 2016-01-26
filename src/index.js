/* Frameworks */
var angular = require('angular');
require('angular-ui-router');
require('../node_modules/angular-timeline/dist/angular-timeline.js');
require('angular-touch');
require('angular-carousel');
require('angular-aria/angular-aria.js')
require('angular-animate/angular-animate.js')
require('angular-material/angular-material.js')
require('ngmap');

var jQuery = $ = require('jquery');
require('normalize.css/normalize.css');
require('reset.css/reset.css');
require('angular-timeline/dist/angular-timeline.css');
require('angular-carousel/dist/angular-carousel.css')

require('angular-material/angular-material.css')

require('./app.styl');

/* App */
var app = angular.module('ITS', ['ui.router','Header','Helpers','App','ngMaterial','ngMap']);

require('./app.config.js')(app);
require('./app/')();
require('./helpers/')();


require('./components/header/')(); 