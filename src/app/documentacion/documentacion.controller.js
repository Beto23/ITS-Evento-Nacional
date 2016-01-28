module.exports = function(ngModule){
	ngModule.controller('documentacionCtrl', documentacionCtrl);

	documentacionCtrl.$inject = ['HelpersFactory', '$scope']
	function documentacionCtrl(HelpersFactory, $scope){
		HelpersFactory.bgFullPage();

		    $scope.delegaciones = [
		      {
		        logoTec : './img/logosTecs/aguascalientes.gif',
		        tec: 'IT Aguascalientes',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/apizaco.jpg',
		        tec: 'IT Apizaco',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/cancun.png',
		        tec: 'IT Cancun',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/cGuzman.jpg',
		        tec: 'IT Ciudad Guzman',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/cJuarez.jpg',
		        tec: 'IT Ciudad Juarez',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/celaya.gif',
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
		        logoTec : './img/logosTecs/culiacan.png',
		        tec: 'IT Culiacan',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/delicias.png',
		        tec: 'IT Delicias',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/durango.png',
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
		        logoTec : './img/logosTecs/huatabampo.png',
		        tec: 'IT Huatabampo',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/jiquilpan.png',
		        tec: 'IT Jiquilpan',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/laguna.png',
		        tec: 'IT Laguna',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/los mochis.png',
		        tec: 'IT Los Mochis',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/merida.png',
		        tec: 'IT Merida',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/minatitlan.png',
		        tec: 'IT Minatitlan',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/morelia.png',
		        tec: 'IT Morelia',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/nogales.jpg',
		        tec: 'IT Nogales',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/nuevo laredo.gif',
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
		        tec: 'IT Queretaro',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/roque.jpg',
		        tec: 'IT Roque',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/san luis potosi.png',
		        tec: 'IT San Luis Potosi',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/saltillo.png',
		        tec: 'IT Saltillo',
		        href: '#',
		        sede: 'Sede'
		      },
		      {
		        logoTec : './img/logosTecs/tehuacan.png',
		        tec: 'IT Tehuacan',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/tepic.gif',
		        tec: 'IT Tepic',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/toluca.gif',
		        tec: 'IT Toluca',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/tuxtepec.gif',
		        tec: 'IT Tuxtepec',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/tuxtla gutierrez.jpg',
		        tec: 'IT Tuxtla Gutierrez',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/veracruz.jpg',
		        tec: 'IT Veracruz',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/villa hermosa.png',
		        tec: 'IT Villa Hermosa',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/arandas.png',
		        tec: 'ITS Arandas',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/coatzacoalcos.png',
		        tec: 'ITS Coatzacoalco',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/escarcega.jpg',
		        tec: 'ITS Escarcega',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/Los Reyes.png',
		        tec: 'ITS Los Reyes',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/los rios.jpg',
		        tec: 'ITS Los Rios',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/nuevo casas grandes.png',
		        tec: 'ITS Nuevo Casas Grandes',
		        href: '#'
		      },
		      {
		        logoTec : './img/logosTecs/santiago papasquiaro.gif',
		        tec: 'ITS Santiago Papasquiaro',
		        href: '#'
		      }
		    ];
	};


};