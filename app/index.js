/* Frameworks */

var jQuery = $ = require('jquery');
require('normalize.css/normalize.css');
require('reset.css/reset.css');
require('./app.styl');

$('#header').html(require('./components/header/header.html'));
$('#inicio').html(require('./sections/inicio/inicio.html'));

require('./components/header/header.js');

$('.Content').attr('min-height', $(window).height() + 'px');