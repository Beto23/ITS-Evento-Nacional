module.exports = function(){
	var headerModule = angular.module('Header',[]);
	require('./header.controller.js')(headerModule);
	require('./header.directive.js')(headerModule);
	require('./header.factory.js')(headerModule);
};