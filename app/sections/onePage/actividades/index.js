module.exports = function(ngModule){
	require('./actividades.css')
	require('./actividades.controller.js')(ngModule);
	require('./actividades.directive.js')(ngModule);
}