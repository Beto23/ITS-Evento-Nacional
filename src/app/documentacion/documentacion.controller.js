module.exports = function(ngModule){
	ngModule.controller('documentacionCtrl', documentacionCtrl);

	documentacionCtrl.$inject = ['HelpersFactory', '$scope']
	function documentacionCtrl(HelpersFactory, $scope){
		HelpersFactory.bgFullPage();

		var logoSaltillo = './img/logoITS.png';
		    $scope.delegaciones = [
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      },
		      {
		        logoTec : logoSaltillo,
		        tec: 'IT Saltillo',
		        programacion: 'Programacion',
		        municipio: 'Saltillo'
		      }
		    ];
	};


};