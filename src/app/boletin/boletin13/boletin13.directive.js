module.exports = function(ngModule){
	ngModule.directive('boletinTrece', boletinTrece);
	function boletinTrece(){
		return {
			restrict: 'E',
			template: require('./boletin13.html'),
			controllerAs: 'vm',
			controller: 'Boletin13Ctrl'
		}
	}
}