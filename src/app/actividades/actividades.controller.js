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
				lugar:[
						{
							nombre: 'Auditorio del IT Saltillo',
							latlong: "25.443667,-100.991779"
						}
					],
				horarios: [
					'10:00 - 13:00',
					'16:00 - 20:00'
				]
			},
			{ 
				title: '7 Febrero',
				actividad: {
					title: "Concurso de bandas de guerra",
					desc: "Escuelas nivel primaria"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.443667,-100.991779"
							}
						],

				horarios: [
					'9:00'
				]
			},
			{ 
				title: '21 y 22 Febrero',
				actividad: {
					title: "Ensayos generales",
					desc: "Escoltas y bandas de guerra de los tecnológicos"
				},
				lugares:[
							{
								nombre: 'Estadio IT Saltillo',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Estadio Fco. I. Madero',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Estadio Olímpico',
								latlong: "25.443667,-100.991779"
							}
					],

				horarios: [
					'10:00 – 21:00'
				]
			},
			{ 
				title: '23 Febrero',
				actividad: {
					title: "Visita a Escuelas",
					desc: "120 presentaciones de las Escoltas y Bandas de Guerra de los Institutos Tecnológicos participantes"
				},
				lugares:[
							{
								nombre: 'Escuelas de nivel básico y medio superior',
								latlong: "25.443667,-100.991779"
							}
						],
				horarios: [
					'9:00-10:00',
					'11:00-12:00',
					'15:00-16:00'
				]
			},
			{ 
				title: '23 Febrero',
				actividad: {
					title: "Toma de fotografía oficial",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.443667,-100.991779"
							}
						],
				horarios: [
					'18:00-21:00'
				]
		},

			{ 
				title: '24 Febrero',
				actividad: {
					title: "Izamiento de bandera",
					desc: "Incineración de bandera y abanderamiento"
				},
				lugares:[
							{
								nombre: 'Parque las maravillas',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: '69 b/i de la 6ª zona militar',
								latlong: "25.443667,-100.991779"
							}
						],

				horarios: [
					'8:00 – 9:00'
				]
			},
			{ 
				title: '24 Febrero',
				actividad: {
					title: "Ofrenda floral",
					desc: "Personaje ilustre"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.443667,-100.991779"
							}
						],

				horarios: [
					'11:00'
				]
			},

			{ 
				title: '24 Febrero',
				actividad: {
					title: "Ceremonia de Inauguración",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Estadio de béisbol Fco. I Madero',
								latlong: "25.443667,-100.991779"
							}
						],

				horarios: [
					'18:00 – 20:00'
				]
			},

			{ 
				title: '25 Febrero',
				actividad: {
					title: "Presentaciones en municipios",
					desc: "Ramos Arizpe, Arteaga, Parras de la Fuente y General Cepeda"
				},
				lugares:[
							{
								nombre: 'Áreas acordadas con los municipios',
								latlong: "25.443667,-100.991779"
							}
						],

				horarios: [
					'10:00 – 12:00'
				]
			},
			{ 
				title: '25 Febrero',
				actividad: {
					title: "Presentaciones en plazas públicas",
					desc: "Ramos Arizpe, Arteaga, Parras de la Fuente y General Cepeda"
				},
				lugares:[
							{
								nombre: 'Alameda Zaragozas',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Plaza de Armas',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Frontispicio del ITS',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Jardín de los Cedros y los Olivos',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Plaza México',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Biblio parque Sur',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Plaza del Congreso',
								latlong: "25.443667,-100.991779"
							},
							{
								nombre: 'Parque las Maravillas',
								latlong: "25.443667,-100.991779"
							},
						],

				horarios: [
					'10:00 – 12:00'
				]
			},
			{
				title: '26 Febrero',
				actividad: {
					title: "Concurso de bandas de guerra",
					desc: "Escuelas nivel primaria"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.443667,-100.991779"
							}
						],

				horarios: [
					'9:00'
				]
			},
		],
		selected = null,
		previous = null;
		vm.tabs = tabs;
		vm.selectedIndex = 2;
	}
}