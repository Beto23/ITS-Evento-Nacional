module.exports = function(ngModule){
	ngModule.directive('sectionActividades', sectionActividades);
	function sectionActividades(){
		return {
			restrict: 'E',
			template: require('./actividades.html'),
			controllerAs: 'vm',
			controller: 'ActividadesCtrl'
		}
	}
}