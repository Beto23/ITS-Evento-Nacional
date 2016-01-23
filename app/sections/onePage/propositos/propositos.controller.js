module.exports = function(ngModule){
	ngModule.controller('PropositosCtrl', PropositosCtrl);

	PropositosCtrl.$inject = ['HelpersFactory']
	function PropositosCtrl(HelpersFactory){
		HelpersFactory.bgFullPage();
	};

};