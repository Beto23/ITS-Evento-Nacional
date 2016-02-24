module.exports = function (ngModule){
	ngModule.controller('veracruzCtrl', veracruzCtrl)

	veracruzCtrl.$inject=['$scope', '$mdDialog', '$mdMedia'];

	function veracruzCtrl ($scope, $mdDialog, $mdMedia){
		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		$scope.showveracruz = function(ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			$mdDialog.show({
			  controller: DialogController,
			  url: '/popup',
			  template: require ('./veracruz.html'),
			  parent: angular.element(document.body),
			  targetEvent: ev,
			  clickOutsideToClose:true,
			  fullscreen: useFullScreen
			})
		};
	}

	DialogController.$inject = ['$scope', '$mdDialog']
	function DialogController($scope, $mdDialog) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
	}
}