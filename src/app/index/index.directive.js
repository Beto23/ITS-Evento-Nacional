module.exports = function(ngModule){
	ngModule.directive('sectionIndex', sectionIndex);

	function sectionIndex(){
		return {
			restrict: 'E',
			template: require('./index.html'),
			bindToController: true,
			controllerAs: 'app',
			controller: 'AppCtrl'
		}
	}
}