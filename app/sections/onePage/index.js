module.exports = function(){
	var onePageModule = angular.module('OnePage',[]);

	require('./inicio/')(onePageModule);
}