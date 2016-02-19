module.exports = function(ngModule){
	ngModule.directive('boletinSeis', boletinSeis);
	function boletinSeis(){
		return {
			restrict: 'E',
			template: require('./boletin6.html'),
			controllerAs: 'vm',
			controller: 'Boletin6Ctrl'
		}
	}
}