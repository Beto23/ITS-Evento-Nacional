module.exports = function(ngModule){
	ngModule.factory('HeaderFactory',HeaderFactory);

	function HeaderFactory(){
		var $window = $(window);
		var $header = $('.Header');
		var $body = $('body, html');

		var header = {};
		/*var header = {
			setHeader: function(selector){ 
				angular.element($window).bind("scroll", function() {
					var top = $(this).scrollTop();
					if(top > ($window.height()- $header.height())){
						$header.addClass('Header-scrolled');
					} else {
						$header.removeClass('Header-scrolled');
					}
				});
			},
			scrollDown: function(sectionID){
				if(sectionID !== 'Multimedia' && sectionID !== 'Boletin'){
					var id = '#' + sectionID;
					$body.animate({
						scrollTop: $(id).position().top - $header.height()
					}, 900)
				} else {
					$(window).scrollTop(0)
				}
			} 
		}*/

		return header;
	}
}