module.exports = function(ngModule){ 

	require('./boletin.controller.js')(ngModule);
	require('./boletin.directive.js')(ngModule);
	require('./boletin1/')(ngModule);
	require('./boletin2/')(ngModule);


}