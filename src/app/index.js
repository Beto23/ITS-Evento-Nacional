module.exports = function(){
	var app = angular.module('App',['angular-carousel', 'angular-timeline']);

	require('./index/')(app);
	require('./msj/')(app);
	require('./inicio/')(app);
	require('./propositos/')(app);
	require('./documentacion/')(app);
	require('./actividades/')(app);
	require('./boletin/')(app);
	require('./multimedia/')(app);

}