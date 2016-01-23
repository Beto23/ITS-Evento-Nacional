module.exports = function(ngModule){
	ngModule.directive('sectionMsj', sectionMsj);

	function sectionMsj(){
		return {
			restrict: 'E',
			template: require('./msj.html'),
			controllerAs: 'vm',
			controller: 'MsjCtrl'
		}
	}
}