module.exports = function(ngModule){
	ngModule.directive('sectionDocumentacion', sectionDocumentacion);

	function sectionDocumentacion(){
		return {
			restrict: 'E',
			template: require('./documentacion.html'),
			controllerAs: 'vm',
			controller: 'documentacionCtrl'
		}
	}
}