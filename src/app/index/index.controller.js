module.exports = function(ngModule){
	ngModule.controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['HeaderFactory','HelpersFactory','$scope']
	function AppCtrl(HeaderFactory,HelpersFactory,$scope){
		var app = this; 
		app.sectionActive = 'Inicio';
		app.changeSection = function(sectionID){
			if(app.sectionActive == 'Multimedia' || app.sectionActive == 'Boletin'){
				setTimeout(function(){
					HeaderFactory.scrollDown(sectionID);

				},1000)
				app.sectionActive = sectionID;
			} else {
				app.sectionActive = sectionID;
				HeaderFactory.scrollDown(sectionID);
			}
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
				if(app.sectionActive != 'Multimedia' && app.sectionActive != 'Boletin')
				if((top >= section.top) && (top <= section.bottom)){  
					app.sectionActive = section.id;
					$scope.$apply();
				}
			})
		});
	}
}