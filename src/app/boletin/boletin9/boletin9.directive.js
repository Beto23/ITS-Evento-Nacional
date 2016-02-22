module.exports = function(ngModule){
	ngModule.directive('boletinNueve', boletinNueve);
	function boletinNueve(){
		return {
			restrict: 'E',
			template: require('./boletin9.html'),
			controllerAs: 'vm',
			controller: 'Boletin9Ctrl'
		}
	}
}