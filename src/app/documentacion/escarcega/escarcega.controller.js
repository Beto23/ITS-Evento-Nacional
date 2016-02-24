module.exports = function (ngModule){
	ngModule.controller('escarcegaCtrl', escarcegaCtrl)

	escarcegaCtrl.$inject=['$scope', '$mdDialog', '$mdMedia'];

	function escarcegaCtrl ($scope, $mdDialog, $mdMedia){
		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		$scope.showescarcega = function(ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			$mdDialog.show({
			  controller: DialogController,
			  url: '/popup',
			  template: require ('./escarcega.html'),
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