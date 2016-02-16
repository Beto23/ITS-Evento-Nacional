module.exports = function(ngModule){
	ngModule.directive('sectionMore', sectionMore);

	function sectionMore(){
		return {
			restrict: 'E',
			template: require('./more.html'),
			controllerAs: 'vm',
			controller: 'MoreCtrl'
		}
	}
}