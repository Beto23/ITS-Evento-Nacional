module.exports = function(ngModule){
	ngModule.directive('header',header);

	function header(){
		return {
			restrict: 'A',
			scope: {
				app: '='
			},
			template: require('./header.html'),
			controllerAs: 'vm',
			bindToController: true,
			controller: 'HeaderCtrl'
		};
	};
};