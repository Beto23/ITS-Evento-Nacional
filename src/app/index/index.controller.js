module.exports = function(ngModule){
	ngModule.controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['HeaderFactory','HelpersFactory','$scope']
	function AppCtrl(HeaderFactory,HelpersFactory,$scope){
		var app = this; 
		app.sectionActive = 'Inicio';

		$('.bgFullPage').css('min-height',$(window).height() + 'px')
		var $body = $('body, html');
		var $window = $(window);
		var $header = $('.Header');

		app.changeSection = function(sectionID){
			scrollDown(sectionID)
			app.sectionActive = sectionID;
		}

		var sections = [];
		$('.OnePageSection').each(function(){
			var id = $(this).attr('id');
			var top = $(this).offset().top;
			var bottom = top + $(this).height();
			var section = {
				id: id,
				top: top,
				bottom: bottom
			}
			sections.push(section);
		})



		function scrollDown(sectionID){
			$body.animate({
				scrollTop: $('#'+sectionID).offset().top - 40
			}, 700)
		}

		angular.element($window).bind("scroll", function() {
			var top = $(this).scrollTop();
			if(top > ($window.height()- $header.height())){
				$header.addClass('Header-scrolled');
			} else {
				$header.removeClass('Header-scrolled');
			}
			sections.forEach(function(section){
				if((top >= (section.top-50)) && (top <= section.bottom)){
					app.sectionActive = section.id; 
					$scope.$apply();
					return;
				}
			})
		});
	}
}