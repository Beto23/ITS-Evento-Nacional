module.exports = function(ngModule){
	require('./lightgallery.css')
	require('./multimedia.styl')
	require('./multimedia.controller.js')(ngModule);
	require('./multimedia.directive.js')(ngModule);
	require('./galeria/inaguracion')(ngModule);
}