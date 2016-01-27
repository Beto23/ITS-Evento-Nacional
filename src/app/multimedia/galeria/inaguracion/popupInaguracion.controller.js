module.exports = function(ngModule){
	ngModule.controller('PopupInaguracionCtrl', PopupInaguracionCtrl);

	function PopupInaguracionCtrl(){
		console.log('controller igna');
		var vm = this;
		vm.sectionActive = 'Multimedia';
		vm.changeSection = function(sectionID){
			vm.sectionActive = sectionID;
		}

		vm.imgs = ['./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg']
	}
};