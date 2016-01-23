module.exports = function(ngModule){
	ngModule.controller('OnePageCtrl', OnePageCtrl);

	OnePageCtrl.$inject = ['HeaderFactory','HelpersFactory']
	function OnePageCtrl(HeaderFactory,HelpersFactory){
		var onePage = this; 

		onePage.changeSection = function(sectionID){
			HeaderFactory.scrollDown(sectionID);
			onePage.sectionActive = sectionID;
		}
		HelpersFactory.bgFullPage();
		HeaderFactory.onScroll();
	}
}