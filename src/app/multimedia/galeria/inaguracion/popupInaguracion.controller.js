module.exports = function(ngModule){
	ngModule.controller('PopupInaguracionCtrl', PopupInaguracionCtrl);


	function PopupInaguracionCtrl(){
		//$scope.imgInaguracion = ['./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg','./img/1.jpg','./img/2.jpg']
		$("#lightgallery").lightGallery(); 
	}
};