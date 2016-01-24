module.exports = function(){
	var boletinModule = angular.module('boletines',['angular-timeline']);

	require('./boletin.controller.js')(boletinModule);

}