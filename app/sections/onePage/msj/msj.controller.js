module.exports = function(ngModule){
	ngModule.controller('MsjCtrl', MsjCtrl);

	function MsjCtrl(){
		var vm = this;
		vm.imgs = ['./img/1.jpg','./img/2.jpg']
		console.log(this);
	}
}