module.exports = function(ngApp) {

	ngApp
		.config(config)
		.run(run);

	config.$inject = ['$stateProvider','$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app',{
				url: '/',
				template: require('./app/index/index.html'),
				controllerAs: 'app',
				controller: 'AppCtrl'
			})
			.state('multimedia',{
				url: '/multimedia',
				template: require('./app/multimedia/multimedia.html'),
				controllerAs: 'multimedia',
				controller: 'MultimediaCtrl'
			})
			.state('boletin',{
				url: '/boletin',
				template: require('./app/boletin/boletin.html'),
				controllerAs: 'boletin',
				controller: 'BoletinCtrl'
			})

			
	}

	run.$inject = ['$rootScope','$state','$stateParams'];
	function run($rootScope, $state, $stateParams) {
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			$(window).scrollTop(0)
		});
	}
};