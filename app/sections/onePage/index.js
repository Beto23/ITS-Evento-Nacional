module.exports = function(){
	var onePageModule = angular.module('OnePage',['angular-carousel', 'angular-timeline']);

	require('./inicio/')(onePageModule);
	require('./msj/')(onePageModule);
	require('./propositos/')(onePageModule);

}