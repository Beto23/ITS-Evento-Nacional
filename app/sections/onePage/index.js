module.exports = function(){
	var onePageModule = angular.module('OnePage',['angular-carousel']);

	require('./inicio/')(onePageModule);
	require('./msj/')(onePageModule);
}