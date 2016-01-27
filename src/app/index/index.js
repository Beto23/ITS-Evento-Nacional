module.exports = function(ngModule){
	require('./index.controller.js')(ngModule);
	require('./index.directive.js')(ngModule);
}