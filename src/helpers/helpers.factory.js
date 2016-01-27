module.exports = function(ngModule){
	ngModule.factory('HelpersFactory',HelpersFactory);

	function HelpersFactory(){
		var Helper = {
			bgFullPage: function(){
				//$('.bgFullPage').css('min-height',$(window).height() + 'px')
			}
		}
		return Helper;
	}
}