module.exports = function(ngModule){
	ngModule.controller('InicioCtrl', InicioCtrl);

	InicioCtrl.$inject = ['HelpersFactory','HeaderFactory']
	function InicioCtrl(HelpersFactory, HeaderFactory){
		HelpersFactory.bgFullPage();

		HeaderFactory.setHeader($('.Inicio .Inicio-title'));
	};
};