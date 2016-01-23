module.exports = function(ngModule){
	ngModule.factory('HeaderFactory',HeaderFactory);

	function HeaderFactory(){
		var header = {
			setHeader: function(selector){ 
				var $window = $(window);
				var $header = $('.Header');

				angular.element($window).bind("scroll", function() {
					var top = $(this).scrollTop();
					if(top > (selector.position().top + selector.height())){
						$header.addClass('Header-scrolled');
					} else {
						$header.removeClass('Header-scrolled');
					}
				});
			}
		}

		return header;
	}
}