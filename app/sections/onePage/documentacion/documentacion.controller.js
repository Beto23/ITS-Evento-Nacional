module.exports = function(ngModule){
	ngModule.controller('documentacionCtrl', documentacionCtrl);

	documentacionCtrl.$inject = ['HelpersFactory']
	function documentacionCtrl(HelpersFactory){
		HelpersFactory.bgFullPage();
	};


};