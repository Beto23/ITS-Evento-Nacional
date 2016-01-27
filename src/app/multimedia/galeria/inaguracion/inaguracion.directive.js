module.exports = function(ngModule){
	ngModule.directive('ignaguracion', ignaguracion);
	function ignaguracion(){
		return {
			restrict: 'E',
			template: require('./inaguracion.html'),
			controllerAs: 'vm',
			controller: 'InaguracionCtrl'
		}
	}
}