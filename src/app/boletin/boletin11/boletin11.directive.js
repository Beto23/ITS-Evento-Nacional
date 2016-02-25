module.exports = function(ngModule){
	ngModule.directive('boletinOnce', boletinOnce);
	function boletinOnce(){
		return {
			restrict: 'E',
			template: require('./boletin11.html'),
			controllerAs: 'vm',
			controller: 'Boletin11Ctrl'
		}
	}
}