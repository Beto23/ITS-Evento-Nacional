module.exports = function(ngModule){
	ngModule.directive('boletinDies', boletinDies);
	function boletinDies(){
		return {
			restrict: 'E',
			template: require('./boletin10.html'),
			controllerAs: 'vm',
			controller: 'Boletin10Ctrl'
		}
	}
}