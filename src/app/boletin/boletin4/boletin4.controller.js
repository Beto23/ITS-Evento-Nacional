module.exports = function(ngModule){
	ngModule.controller('Boletin4Ctrl', Boletin4Ctrl);

	Boletin4Ctrl.$inject = ['$scope', '$mdDialog', '$mdMedia']
	function Boletin4Ctrl($scope, $mdDialog, $mdMedia){
		$scope.status = '  ';
		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		$scope.showAdvanced4 = function(ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
			$mdDialog.show({
			  controller: DialogController,
			  url: '/popup',
			  template: require ('./boletin4.1.html'),
			  parent: angular.element(document.body),
			  targetEvent: ev,
			  clickOutsideToClose:true,
			  fullscreen: useFullScreen
			})
		};

	};
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
};