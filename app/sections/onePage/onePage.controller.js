module.exports = function(ngModule){
	ngModule.controller('OnePageCtrl', OnePageCtrl);

	OnePageCtrl.$inject = ['HeaderFactory','HelpersFactory','$scope']
	function OnePageCtrl(HeaderFactory,HelpersFactory,$scope){
		var onePage = this; 
		onePage.sectionActive = 'Inicio';
		onePage.changeSection = function(sectionID){
			HeaderFactory.scrollDown(sectionID);
			onePage.sectionActive = sectionID;
		}
		HelpersFactory.bgFullPage();

		HeaderFactory.setHeader();

		var $window = $(window);
		var $header = $('.Header');
		var h = $window.height(); 
		var sections = [];
		
		/* Top and bottom de cada seccion del scroll down */
		var $onePageSections = $('.OnePageSection');
		$onePageSections.each(function(){
			// Detectar cual seccion es ej: Historia, su top y bottom
			var sectionID = $(this).attr('id');

			var top = $('#'+sectionID).position().top;
			var bottom = top + $(this).height();

			var section = {
				id: sectionID,
				top: top,
				bottom: bottom
			}
			sections.push(section);
		})
 
		//cuando se scrollea se cambia la seccion activa y se propaga el valor hacia el padre
		angular.element($window).bind("scroll", function() {
			var top = $(this).scrollTop() + $header.height();

			sections.forEach(function(section){
				if((top >= section.top) && (top <= section.bottom)){  
					onePage.sectionActive = section.id;
					$scope.$apply();
				}
			})
		});
	}
}