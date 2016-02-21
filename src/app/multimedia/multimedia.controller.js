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
				nombre: 'Reuni&#243;n de Log&#237;stica',
				fecha: '',
				img: './img/boletin/rl1.jpg',
				galeria: ['./img/boletin/rl2.jpg','./img/boletin/rl1.jpg','./img/boletin/rl3.jpg']
			},
			{
				nombre: 'Taller de Instrucci&#243;n.',
				fecha: '',
				img: './img/boletin/ci2.jpg',
				galeria: ['./img/boletin/ci1.jpg','./img/boletin/ci2.jpg','./img/boletin/ci33.jpg', './img/boletin/ci4.jpg', './img/boletin/ci5.jpg']
			},
			{
				nombre: 'Reuni&#243;n T&#233;cnica',
				fecha: '',
				img: './img/boletin/rt1.jpg',
				galeria: ['./img/boletin/rt1.jpg','./img/boletin/rt2.jpg','./img/boletin/rt3.jpg', './img/boletin/rt4.jpg', './img/boletin/rt5.jpg']
			},
			{
				nombre: 'Rueda de Prensa',
				fecha: '',
				img: './img/boletin/rpp1.jpg',
				galeria: ['./img/boletin/rpp1.jpg','./img/boletin/rpp2.jpg','./img/boletin/rpp3.jpg', './img/boletin/rpp4.jpg']
			},
			{
				nombre: 'Reuni&#243;n con la comisi&#243;n de Tr&#225;nsito y Vialidad',
				fecha: '',
				img: './img/boletin/poli1.jpg',
				galeria: ['./img/boletin/poli1.jpg','./img/boletin/poli2.jpg','./img/boletin/poli5.jpg', './img/boletin/poli4.jpg', './img/boletin/poli6.jpg']
			},
			{
				nombre: 'Burrito Bandero 2016',
				fecha: '',
				img: './img/boletin/bb1.jpg',
				galeria: ['./img/boletin/bb1.jpg','./img/boletin/bb2.jpg','./img/boletin/bb5.jpg', './img/boletin/bb4.jpg', './img/boletin/bb3.jpg']
			},
			{
				nombre: 'Reuni&#243;n entre Comisiones y Representantes del TecNM.',
				fecha: '',
				img: './img/boletin/sm1.jpg',
				galeria: ['./img/boletin/sm1.jpg','./img/boletin/sm2.jpg','./img/boletin/sm5.jpg', './img/boletin/sm4.jpg', './img/boletin/sm3.jpg']
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