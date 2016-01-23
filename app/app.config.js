module.exports = function(ngApp) {

	ngApp
		.config(config)
		.run(run);

	config.$inject = ['$stateProvider','$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url: '/',
				template: require('./sections/onePage/onePage.html'),
				controllerAs: 'onePage',
				bindToController: true,
				controller: 'OnePageCtrl'
			})
			.state('multimedia',{
				url: '/multimedia',
				template: require('./sections/multimedia/multimedia.html'),
				controllerAs: 'onePage',
				bindToController: true,
				controller: 'OnePageCtrl'
			})
	}

	run.$inject = ['$rootScope','$state','$stateParams'];
	function run($rootScope, $state, $stateParams) {
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

		});
	}
};