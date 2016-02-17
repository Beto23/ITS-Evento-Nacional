module.exports = function(ngModule){
	ngModule.directive('header',header);
	ngModule.directive('headerReturn',headerReturn);
	ngModule.directive('headerMore', headerMore);

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
	function headerMore(){
		return {
			restrict: 'E',
			template: require('./headerMore.html')
		};
	};
};