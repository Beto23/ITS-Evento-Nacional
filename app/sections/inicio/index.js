module.exports = function(){

	require('slick-carousel/slick/slick.css')
	require('slick-carousel/slick/slick-theme.css')
	var slick = require('slick-carousel/slick/slick.js');
	console.log(slick)
	$('.one-time').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

}