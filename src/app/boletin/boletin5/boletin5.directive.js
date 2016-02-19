module.exports = function(ngModule){
	ngModule.directive('boletinCinco', boletinCinco);
	function boletinCinco(){
		return {
			restrict: 'E',
			template: require('./boletin5.html'),
			controllerAs: 'vm',
			controller: 'Boletin5Ctrl'
		}
	}
}