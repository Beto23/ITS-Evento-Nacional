module.exports = function(){
	$('body').on('click','.slider-indicador',function(){
		$('.slider-indicador').removeClass('activo');
		var img = $(this).attr('img');
		$(this).addClass('activo');
		$('.Inicio-slider').css('background-image','url(img/'+img+'.jpg)');

	})
}