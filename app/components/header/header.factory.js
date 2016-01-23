module.exports = function(ngModule){
	ngModule.factory('HeaderFactory',HeaderFactory);

	function HeaderFactory(){
		var $window = $(window);
		var $header = $('.Header');
		var $body = $('body, html');

		var header = {
			setHeader: function(selector){ 
				angular.element($window).bind("scroll", function() {
					var top = $(this).scrollTop();
					if(top > (selector.position().top + selector.height())){
						$header.addClass('Header-scrolled');
					} else {
						$header.removeClass('Header-scrolled');
					}
				});
			},
			scrollDown: function(sectionID){
				$body.animate({
					scrollTop: $("#"+sectionID).offset().top - $header.height()
				}, 700);
			} 
		}

		return header;
	}
}