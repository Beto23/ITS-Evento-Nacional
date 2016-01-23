module.exports = function(ngModule){
	ngModule.controller('InicioCtrl', InicioCtrl);

	InicioCtrl.$inject = ['HelpersFactory']
	function InicioCtrl(HelpersFactory){
		HelpersFactory.bgFullPage();
	};
};