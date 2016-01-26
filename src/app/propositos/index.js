module.exports = function(ngModule){
	require('./wow/animate.css');
	require('./propositos.controller.js')(ngModule);
	require('./propositos.directive.js')(ngModule);
}