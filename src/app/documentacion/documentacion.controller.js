module.exports = function(ngModule){
	ngModule.controller('documentacionCtrl', documentacionCtrl);

	documentacionCtrl.$inject = ['HelpersFactory', '$scope']
	function documentacionCtrl(HelpersFactory, $scope){
		HelpersFactory.bgFullPage();

		    $scope.delegaciones = [
		      {
		        logoTec : './img/logosTecs/aguascalientes.jpg',
		        tec: 'IT Aguascalientes',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/apizaco.jpg',
		        tec: 'IT Apizaco',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/cancun.jpg',
		        tec: 'IT Canc&#250;n',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/cGuzman.jpg',
		        tec: 'IT Ciudad Guzm&#225;n',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/cJuarez.jpg',
		        tec: 'IT Ciudad Ju&#225;rez',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/celaya.jpg',
		        tec: 'IT Celaya',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/chetumal.jpg',
		        tec: 'IT Chetumal',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/chihuaahua.jpg',
		        tec: 'IT Chihuahua',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/culiacan.jpg',
		        tec: 'IT Culiac&#225;n',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/delicias.jpg',
		        tec: 'IT Delicias',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/durango.jpg',
		        tec: 'IT Durango',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/felipeCarrillo.jpg',
		        tec: 'IT Felipe Carrillo',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/hermosillo.jpg',
		        tec: 'IT Hermosillo',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/huatabampo.jpg',
		        tec: 'IT Huatabampo',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/jiquilpan.jpg',
		        tec: 'IT Jiquilpan',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/laguna.jpg',
		        tec: 'IT Laguna',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/losMochis.jpg',
		        tec: 'IT Los Mochis',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/merida.jpg',
		        tec: 'IT M&#233;rida',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/minatitlan.jpg',
		        tec: 'IT Minatitl&#225;n',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/morelia.jpg',
		        tec: 'IT Morelia',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/nogales.jpg',
		        tec: 'IT Nogales',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/nuevoLaredo.jpg',
		        tec: 'IT Nuevo Laredo',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/orizaba.jpg',
		        tec: 'IT Orizaba',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/queretaro.jpg',
		        tec: 'IT Quer&#233;taro',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/roque.jpg',
		        tec: 'IT Roque',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/sanLuisPotosi.jpg',
		        tec: 'IT San Luis Potos&#237;',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/saltillo.jpg',
		        tec: 'IT Saltillo',
		        href: '#',
		        sede: 'Sede'
		      },
		      {
		        logoTec : './img/logosTecs/tehuacan.jpg',
		        tec: 'IT Tehuac	&#225;n',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/tepic.jpg',
		        tec: 'IT Tepic',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/toluca.png',
		        tec: 'IT Toluca',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/tuxtepec.jpg',
		        tec: 'IT Tuxtepec',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/tuxtlaGutierrez.jpg',
		        tec: 'IT Tuxtla Guti&#233;rrez',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/veracruz.jpg',
		        tec: 'IT Veracruz',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/villaHermosa.jpg',
		        tec: 'IT Villa Hermosa',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/arandas.jpg',
		        tec: 'ITS Arandas',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/coatzacoalcos.jpg',
		        tec: 'ITS Coatzacoalco',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/escarcega.jpg',
		        tec: 'ITS Esc&#225;rcega',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/LosReyes.jpg',
		        tec: 'ITS Los Reyes',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/losRios.jpg',
		        tec: 'ITS Los R&#237;os',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/nuevoCasasGrandes.jpg',
		        tec: 'ITS Nuevo Casas Grandes',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/santiago-papasquiaro.jpg',
		        tec: 'ITS Santiago Papasquiaro',
		        href: '#'
		      }
		    ];
	};


};