module.exports = function(ngModule){
	ngModule.directive('boletinDoce', boletinDoce);
	function boletinDoce(){
		return {
			restrict: 'E',
			template: require('./boletin12.html'),
			controllerAs: 'vm',
			controller: 'Boletin12Ctrl'
		}
	}
}