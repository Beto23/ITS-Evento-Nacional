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
				nombre: 'Rueda de Prensa',
				fecha: '',
				img: './img/boletin/rp2.jpg',
				galeria: ['./img/boletin/rp2.jpg','./img/boletin/rp1.jpg','./img/boletin/rp3.jpg']
			},
			{
				nombre: 'Taller de Instrucci&#243;n.',
				fecha: '',
				img: './img/boletin/ci2.jpg',
				galeria: ['./img/boletin/ci1.jpg','./img/boletin/ci2.jpg','./img/boletin/ci33.jpg']
			}
		]

		multimedia.videos = [
			{
				nombre: 'Encuentro Nacional Estudiantil De Escoltas Y Bandas De Guerra',
				url: './videos/encuentro720p.mp4',
				url2: './videos/encuentro360p.mp4'
			}
		]


		multimedia.seleccionarEvento = function(galeria){
			multimedia.isPopupOn = true;
			multimedia.eventoSeleccionado = galeria;
		}
	}
};