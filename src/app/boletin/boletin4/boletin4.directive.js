module.exports = function(ngModule){
	ngModule.directive('boletinCuatro', boletinCuatro);
	function boletinCuatro(){
		return {
			restrict: 'E',
			template: require('./boletin4.html'),
			controllerAs: 'vm',
			controller: 'Boletin4Ctrl'
		}
	}
}