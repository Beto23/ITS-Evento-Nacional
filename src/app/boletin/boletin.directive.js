module.exports = function(ngModule){
	ngModule.directive('sectionBoletin', sectionBoletin);

	function sectionBoletin(){
		return {
			restrict: 'E',
			template: require('./boletin.html'),
			controllerAs: 'vm',
			controller: 'BoletinCtrl'
		}
	}
}