module.exports = function(ngModule){
	ngModule.directive('header',header);

	function header(){
		return {
			restrict: 'A',
			scope: {
				onePage: '='
			},
			template: require('./header.html'),
			controllerAs: 'vm',
			bindToController: true,
			controller: 'HeaderCtrl'
		};
	};
};