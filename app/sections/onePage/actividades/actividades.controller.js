module.exports = function(ngModule){
	ngModule.controller('ActividadesCtrl',ActividadesCtrl);

	function ActividadesCtrl(){
		console.log('ActividadesCtrl')
		var vm = this;
		var tabs = [
			{ 
				title: '21 al 23 enero',
				actividad: {
					title: "Curso-Taller de Actualización Técnica",
					desc: "Dirigido a Instructores del nivel básico y medio superior de la localidad Técnica"
				},
				lugar: {
					nombre: 'Auditorio del IT Saltillo',
					latlong: "25.443667,-100.991779"
				},
				horario: [
					'10:00 - 13:00',
					'16:00 - 20:00'
				]
			},
			{ 
				title: '21 al 23 enero',
				actividad: {
					title: "Curso-Taller de Actualización Técnica",
					desc: "Dirigido a Instructores del nivel básico y medio superior de la localidad Técnica"
				},
				lugar: {
					nombre: 'Auditorio del IT Saltillo',
					latlong: "25.443667,-100.991779"
				},
				horario: [
					'10:00 - 13:00',
					'16:00 - 20:00'
				]
			}
		],
		selected = null,
		previous = null;
		vm.tabs = tabs;
		vm.selectedIndex = 2;
	}
}