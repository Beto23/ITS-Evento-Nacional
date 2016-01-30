module.exports = function(ngModule){
	ngModule.directive('header',header);
	ngModule.directive('headerReturn',headerReturn);

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
	function headerReturn(){
		return {
			restrict: 'E',
			template: require('./headerReturn.html')
		};
	};
};