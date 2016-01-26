module.exports = function(ngModule){
	ngModule.directive('sectionInicio', sectionInicio);

	function sectionInicio(){
		return {
			restrict: 'E',
			template: require('./inicio.html'),
			controllerAs: 'vm',
			controller: 'InicioCtrl'
		}
	}
}