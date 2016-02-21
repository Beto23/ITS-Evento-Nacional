module.exports = function(ngModule){
	ngModule.directive('boletinOcho', boletinOcho);
	function boletinOcho(){
		return {
			restrict: 'E',
			template: require('./boletin8.html'),
			controllerAs: 'vm',
			controller: 'Boletin8Ctrl'
		}
	}
}