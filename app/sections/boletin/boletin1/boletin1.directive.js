module.exports = function(ngModule){
	ngModule.directive('boletinUno', boletinUno);
	function boletinUno(){
		return {
			restrict: 'E',
			template: require('./boletin1.html'),
			controllerAs: 'vm',
			controller: 'Boletin1Ctrl'
		}
	}
}