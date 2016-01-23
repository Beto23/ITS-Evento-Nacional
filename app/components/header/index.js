module.exports = function(){
	var headerModule = angular.module('Header',[]);
	require('./header.controller.js')(headerModule);
	require('./header.directive.js')(headerModule);
};