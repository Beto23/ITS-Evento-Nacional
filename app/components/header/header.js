(function(){

	var popup = require('../popup.js');

	$('.link').click(function(){
		popup.open();

		var section = $(this).attr('section');
		popup.fill(section);
	});

	$('.close').click(function(){
		popup.close();
	});

	$('#hamburguer')
		.click(function(event) {
			$('#hide-ul')
				.toggleClass('ul-show');
		});


})();