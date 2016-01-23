module.exports = function(ngModule){
	ngModule.directive('sectionPropositos', sectionPropositos);

	function sectionPropositos(){
		return {
			restrict: 'E',
			template: require('./propositos.html'),
			controllerAs: 'vm',
			controller: 'PropositosCtrl'
		}
	}
}