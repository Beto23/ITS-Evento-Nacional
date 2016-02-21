module.exports = function(ngModule){
	ngModule.directive('boletinSiete', boletinSiete);
	function boletinSiete(){
		return {
			restrict: 'E',
			template: require('./boletin7.html'),
			controllerAs: 'vm',
			controller: 'Boletin7Ctrl'
		}
	}
}