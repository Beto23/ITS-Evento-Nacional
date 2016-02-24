module.exports = function(ngModule){
	require('./documentacion.controller.js')(ngModule);
	require('./documentacion.directive.js')(ngModule);
	require('./papasquiaro-tec/')(ngModule);
	require('./casas-grandes/')(ngModule);
	require('./felipeCarrillo/')(ngModule);
	require('./escarcega/')(ngModule);
	require('./rios/')(ngModule);
	require('./hidalgo/')(ngModule);
	require('./arandas/')(ngModule);
	require('./villahermosa/')(ngModule);
	require('./veracruz/')(ngModule);
	require('./tuxtepec/')(ngModule);

	require('./popupSemblanza.directive.js')
}