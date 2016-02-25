module.exports = function(ngModule){
	ngModule.directive('boletinCatorce', boletinCatorce);
	function boletinCatorce(){
		return {
			restrict: 'E',
			template: require('./boletin14.html'),
			controllerAs: 'vm',
			controller: 'Boletin14Ctrl'
		}
	}
}