module.exports = function(ngModule){
	ngModule.controller('MultimediaCtrl', MultimediaCtrl);
MultimediaCtrl.$inject = ['$scope']
	function MultimediaCtrl($scope){ 
		/*vm.sectionActive = 'Multimedia';
		vm.changeSection = function(sectionID){
			vm.sectionActive = sectionID;
		}*/ 
		$scope.imgs = ['./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg']
	}
};