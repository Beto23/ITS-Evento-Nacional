module.exports = function(ngModule){
	ngModule.controller('BoletinCtrl', BoletinCtrl);

	function BoletinCtrl () {
		console.log('boletin');
		var contenedor_bltn= $('div#numBoletin').children('.bb');
		var a = 1;
		$('#asc').click(function(event) {
			for (var i = contenedor_bltn.length; i >= 0; i--) {
				$(contenedor_bltn[i]).css({
					order: a
				});
				a++
			}
		});
		$('#desc').click(function(event) {
			for (var i = 0; i <= contenedor_bltn.length; i++) {
				$(contenedor_bltn[i]).css({
					order: a
				});
				a++
			}
		});
	}
}
