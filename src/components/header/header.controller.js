module.exports = function(ngModule){
	ngModule.controller('HeaderCtrl', HeaderCtrl);

	HeaderCtrl.$inject = []
	function HeaderCtrl(){
		var vm = this;

		$('#hamburguer')
			.click(function(event) {
				$('#hide-ul').toggleClass('ul-show');
			});
	};
};