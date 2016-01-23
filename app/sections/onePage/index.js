module.exports = function(){
	var onePageModule = angular.module('OnePage',['angular-carousel', 'angular-timeline']);

	require('./onePage.controller.js')(onePageModule);
	require('./msj/')(onePageModule);
	require('./inicio/')(onePageModule);
	require('./propositos/')(onePageModule);
	require('./documentacion/')(onePageModule);
	require('./actividades/')(onePageModule);

}