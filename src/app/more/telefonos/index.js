module.exports = function(ngModule){ 

	require('./telefono.controller.js')(ngModule);
	require('./telefono.directive.js')(ngModule);

}