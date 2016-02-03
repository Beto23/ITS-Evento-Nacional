module.exports = function(ngModule){
	ngModule.directive('boletinDos', boletinDos);
	function boletinDos(){
		return {
			restrict: 'E',
			template: require('./boletin2.html'),
			controllerAs: 'vm',
			controller: 'Boletin2Ctrl'
		}
	}
}