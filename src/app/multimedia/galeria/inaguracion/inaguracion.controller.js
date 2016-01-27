module.exports = function(ngModule){
	ngModule.controller('InaguracionCtrl', InaguracionCtrl);

	InaguracionCtrl.$inject = ['$scope', '$mdDialog', '$mdMedia']
	function InaguracionCtrl($scope, $mdDialog, $mdMedia){
		$scope.status = '  ';
		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		$scope.showAdvanced = function(ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			$mdDialog.show({
			  controller: DialogController,
			  url: '/popup',
			  template: require ('./galeriaIgn.html'),
			  parent: angular.element(document.body),
			  targetEvent: ev,
			  clickOutsideToClose:true,
			  fullscreen: useFullScreen
			})
		};
	}
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
};