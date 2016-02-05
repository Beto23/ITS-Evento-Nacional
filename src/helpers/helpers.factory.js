module.exports = function(ngModule){
	ngModule.factory('HelpersFactory',HelpersFactory);
	ngModule.filter('to_trusted', ['$sce', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}]);

	function HelpersFactory(){
		var Helper = {
			bgFullPage: function(){
				//$('.bgFullPage').css('min-height',$(window).height() + 'px')
			}
		}
		return Helper;
	}
}