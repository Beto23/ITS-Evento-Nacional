module.exports = function(ngModule){
	ngModule.directive('header',header);

	function header(){
		return {
			restrict: 'A',
			template: require('./header.html'),
			controllerAs: 'vm',
			controller: 'HeaderCtrl'
		};
	};
};