module.exports = function(ngModule){
	ngModule.controller('MultimediaCtrl', MultimediaCtrl);

	function MultimediaCtrl(){
		var multimedia = this;
		multimedia.isPopupOn = false;
		multimedia.eventoSeleccionado = ['./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg'];
		$('.Multimedia-type').click(function(){
			var op = $(this).parent().attr('id');
			$('.'+op).toggleClass('isOpen')
			$(this).toggleClass('isOpen')
		})

		multimedia.galeria = {}
		multimedia.galeria.eventos = [
			{
				nombre: 'Inaguración',
				fecha: '10 de febrero',
				img: './img/1.jpg',
				galeria: ['./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg']
			},
			{
				nombre: 'Inaguración2',
				fecha: '10 de febrero',
				img: './img/1.jpg',
				galeria: ['./img/1.jpg','./img/2.jpg']
			},
			{
				nombre: 'Inaguración3',
				fecha: '10 de febrero',
				img: './img/1.jpg',
				galeria: ['./img/1.jpg']
			}
		]


		multimedia.seleccionarEvento = function(galeria){
			multimedia.isPopupOn = true;
			multimedia.eventoSeleccionado = galeria;
		}
	}
};