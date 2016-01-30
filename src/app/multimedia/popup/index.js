module.exports = function(ngModule){
	ngModule.controller('PopupCtrl', PopupCtrl);
	function PopupCtrl(){
		var popup = this;
		console.log(this);
	}


	ngModule.directive('popupGaleria', popupGaleria);
	function popupGaleria(){
		return {
			restrict: 'E',
			scope: {
				imgs: "=",
				isPopupOn: "="
			},
			template: require('./popup.html'),
			bindToController: true,
			controllerAs: 'popup',
			controller: 'PopupCtrl'
		}
	}
}