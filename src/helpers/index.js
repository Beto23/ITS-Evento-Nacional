module.exports = function(){
	var helpersModule = angular.module('Helpers',[]);
	require('./helpers.factory.js')(helpersModule);
};