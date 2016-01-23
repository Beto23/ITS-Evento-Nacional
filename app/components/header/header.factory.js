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
			},
			onScroll: function(){
				console.log('3')
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
						console.log(section)
						if((top >= section.top) && (top <= section.bottom)){
							//if((section.id !== 'Hoteles') || (section.id !== 'Atractivos') || (section.id !== 'Gastronomia')){
							//	console.log(section.id)
								console.log(section.id)
							//}
						}
					})
				});
			}
		}

		return header;
	}
}