(function(){

	var popup = require('../popup.js');

	$('.link').click(function(){
		popup.open();

		var section = $(this).attr('section');
		popup.fill(section);
	});

	$('.close').click(function(){
		console.log('a')
		popup.close();
	});


})();