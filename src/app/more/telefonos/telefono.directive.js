module.exports = function(ngModule){
	ngModule.directive('sectionMore', sectionMore);

	function sectionMore(){
		return {
			restrict: 'E',
			template: require('./telefono.html'),
			controllerAs: 'vm',
			controller: 'TelController'
		}
	}
}