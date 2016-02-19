module.exports = function(ngModule){
	ngModule.directive('boletinTres', boletinTres);
	function boletinTres(){
		return {
			restrict: 'E',
			template: require('./boletin3.html'),
			controllerAs: 'vm',
			controller: 'Boletin3Ctrl'
		}
	}
}