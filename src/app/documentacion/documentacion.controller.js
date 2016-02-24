module.exports = function(ngModule){
	ngModule.controller('documentacionCtrl', documentacionCtrl);

	documentacionCtrl.$inject = ['HelpersFactory', '$scope']
	function documentacionCtrl(HelpersFactory, $scope){
		HelpersFactory.bgFullPage();

		    $scope.delegaciones = [
		      {
		        logoTec : './img/logosTecs/aguascalientes.jpg',
		        tec: 'IT Aguascalientes'
		      },
		      {
		        logoTec : './img/logosTecs/apizaco.jpg',
		        tec: 'IT Apizaco'
		      },
		      {
		        logoTec : './img/logosTecs/cancun.jpg',
		        tec: 'IT Canc&#250;n'
		      },
		      {
		        logoTec : './img/logosTecs/cuauhtemoc.jpg',
		        tec: 'IT Ciudad Cuahutemoc'
		      },
		      {
		        logoTec : './img/logosTecs/cGuzman.jpg',
		        tec: 'IT Ciudad Guzm&#225;n'
		      },
		      {
		        logoTec : './img/logosTecs/itHidalgo.jpg',
		        tec: 'IT Ciudad Hidalgo',
		        link: 'showhidalgo($event)'

		      },
		      {
		        logoTec : './img/logosTecs/cJuarez.jpg',
		        tec: 'IT Ciudad Ju&#225;rez'
		      },
		      {
		        logoTec : './img/logosTecs/celaya.jpg',
		        tec: 'IT Celaya'
		      },
		      {
		        logoTec : './img/logosTecs/chetumal.jpg',
		        tec: 'IT Chetumal'
		      },
		      {
		        logoTec : './img/logosTecs/culiacan.jpg',
		        tec: 'IT Culiac&#225;n'
		      },
		      {
		        logoTec : './img/logosTecs/delicias.jpg',
		        tec: 'IT Delicias'
		      },
		      {
		        logoTec : './img/logosTecs/durango.jpg',
		        tec: 'IT Durango'
		      },
		      {
		        logoTec : './img/logosTecs/felipeCarrillo.jpg',
		        tec: 'IT Felipe Carrillo',
		        link: 'showfelipeCarrillo($event)'
		      },
		      {
		        logoTec : './img/logosTecs/hermosillo.jpg',
		        tec: 'IT Hermosillo'
		      },
		      {
		        logoTec : './img/logosTecs/huatabampo.jpg',
		        tec: 'IT Huatabampo'
		      },
		      {
		        logoTec : './img/logosTecs/jiquilpan.jpg',
		        tec: 'IT Jiquilpan'
		      },
		      {
		        logoTec : './img/logosTecs/laguna.jpg',
		        tec: 'IT Laguna'
		      },
		      {
		        logoTec : './img/logosTecs/losMochis.jpg',
		        tec: 'IT Los Mochis'
		      },
		      {
		        logoTec : './img/logosTecs/merida.jpg',
		        tec: 'IT M&#233;rida'
		      },
		      {
		        logoTec : './img/logosTecs/mazatlan.jpg',
		        tec: 'IT Mazatlan'
		      },
		      {
		        logoTec : './img/logosTecs/minatitlan.jpg',
		        tec: 'IT Minatitl&#225;n'
		      },
		      {
		        logoTec : './img/logosTecs/morelia.jpg',
		        tec: 'IT Morelia'
		      },
		      {
		        logoTec : './img/logosTecs/nogales.jpg',
		        tec: 'IT Nogales'
		      },
		      {
		        logoTec : './img/logosTecs/nuevoLaredo.jpg',
		        tec: 'IT Nuevo Laredo'
		      },
		      {
		        logoTec : './img/logosTecs/orizaba.jpg',
		        tec: 'IT Orizaba'
		      },
		      {
		        logoTec : './img/logosTecs/queretaro.jpg',
		        tec: 'IT Quer&#233;taro'
		      },
		      {
		        logoTec : './img/logosTecs/roque.jpg',
		        tec: 'IT Roque'
		      },
		      {
		        logoTec : './img/logosTecs/sanLuisPotosi.jpg',
		        tec: 'IT San Luis Potos&#237;'
		      },
		      {
		        logoTec : './img/logosTecs/saltillo.jpg',
		        tec: 'IT Saltillo',
		        sede: 'Sede'
		      },
		      {
		        logoTec : './img/logosTecs/tehuacan.jpg',
		        tec: 'IT Tehuac	&#225;n'
		      },
		      {
		        logoTec : './img/logosTecs/tepic.jpg',
		        tec: 'IT Tepic'
		      },
		      {
		        logoTec : './img/logosTecs/toluca.png',
		        tec: 'IT Toluca'
		      },
		      {
		        logoTec : './img/logosTecs/tuxtepec.jpg',
		        tec: 'IT Tuxtepec',
		        link: 'showtuxtepec($event)'
		      },
		      {
		        logoTec : './img/logosTecs/veracruz.jpg',
		        tec: 'IT Veracruz',
		        link: 'showveracruz($event)'
		      },
		      {
		        logoTec : './img/logosTecs/villaHermosa.jpg',
		        tec: 'IT Villa Hermosa',
		        link: 'showvillahermosa($event)'
		      },
		      {
		        logoTec : './img/logosTecs/arandas.jpg',
		        tec: 'ITS Arandas',
		        link: 'showarandas($event)'
		      },
		      {
		        logoTec : './img/logosTecs/escarcega.jpg',
		        tec: 'ITS Esc&#225;rcega',
		        link: 'showescarcega($event)'
		      },
		      {
		        logoTec : './img/logosTecs/LosReyes.jpg',
		        tec: 'ITS Los Reyes'
		      },
		      {
		        logoTec : './img/logosTecs/losRios.jpg',
		        tec: 'ITS Los R&#237;os',
		        link: 'showrios($event)'
		      },
		      {
		        logoTec : './img/logosTecs/nuevoCasasGrandes.jpg',
		        tec: 'ITS Nuevo Casas Grandes',
		        link: 'showCasas($event)'
		      },
		      {
		        logoTec : './img/logosTecs/santiago-papasquiaro.jpg',
		        tec: 'ITS Santiago Papasquiaro',
		        link: 'showPapasquiaro($event)'
		      }
		    ];
	};
};