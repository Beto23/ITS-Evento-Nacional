module.exports = function(ngModule){
	ngModule.controller('InicioCtrl', InicioCtrl);

	InicioCtrl.$inject = ['HeaderFactory', 'HelpersFactory']
	function InicioCtrl(HeaderFactory, HelpersFactory){

		HeaderFactory.setHeader($('.Inicio .Inicio-title'));
	};
};