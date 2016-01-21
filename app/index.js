/* Frameworks */

var jQuery = $ = require('jquery');
require('normalize.css/normalize.css');
require('reset.css/reset.css');
require('./app.styl');

$('#header').append(require('./components/header/header.html'));