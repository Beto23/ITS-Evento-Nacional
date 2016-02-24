module.exports = function(ngModule){
	ngModule.directive('popupSemblanza', popupSemblanza);

	function popupSemblanza(){
		return {
			restrict: 'E',
			scope: {
				info: "="
			},
			template: require('./popupSemblanza.html'),
			controller: 'documentacionCtrl'
		}
	}
}