module.exports = function(ngModule){
	ngModule.controller('ActividadesCtrl',ActividadesCtrl);

	ActividadesCtrl.$inject = ['NgMap']
	function ActividadesCtrl(NgMap){
		console.log('ActividadesCtrl')
		var vm = this;
		 NgMap.getMap().then(function(map) {
			console.log('map', map);
			vm.map = map;
		});

		vm.showDetail = function(e, lugar) {
			vm.lugar = lugar;
			vm.map.showInfoWindow('foo-iw', lugar.id);
		};

		vm.hideDetail = function() {
			vm.map.hideInfoWindow('foo-iw');
		};

		var tabs = [
			{
				id: 1, 
				title: '21 al 23 enero',
				actividad: {
					title: "Curso-Taller de Actualizaci\u00F3n T\u00E9cnica",
					desc: "Dirigido a Instructores del nivel b\u00E1sico y medio superior de la localidad T\u00E9cnica"
				},
				lugares:[
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
				id: 2,
				title: '27 al 29 enero',
				actividad: {
					title: "Reuni\u00F3n T\u00E9cnica",
					desc: "Equipo de apoyo t\u00E9cnico c\u00EDvico e Instructores de escoltas y bandas de guerra de los institutos participantes."
				},
				lugares:[
						{
							nombre: 'Auditorio de Gesti\u00F3n Tecnol\u00F3gica y Vinculaci\u00F3n del ITS.',
							latlong: "25.443667,-100.991779"
						}
					],
				horarios: [
					'10:00 - 13:00',
					'15:00 - 19:00'
				]
			},
			{
				id:3,
				title: '19 Febrero',
				actividad: {
					title: "Burrito Bandero 2016",
					desc: "Concurso de bandas de guerra de Escuelas nivel primaria"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.441544, -100.992572"
							}
						],

				horarios: [
					'10:00'
				]
			},
			{ 
				id:4,
				title: '21 y 22 Febrero',
				actividad: {
					title: "Ensayos generales",
					desc: "Escoltas y bandas de guerra de los tecnol\u00F3gicos"
				},
				lugares:[
							{
								nombre: 'Estadio IT Saltillo',
								latlong: "25.442400, -100.994395"
							},
							{
								nombre: 'Estadio Fco. I. Madero',
								latlong: "25.4335048,-100.9792932"
							},
							{
								nombre: 'Estadio Ol\u00EDmpico',
								latlong: "25.431873, -100.979790"
							}
					],

				horarios: [
					'10:00 – 21:00'
				]
			},
			{ 
				id:5,
				title: '23 Febrero',
				actividad: {
					title: "Visita a Escuelas",
					desc: "120 presentaciones de las Escoltas y Bandas de Guerra de los Institutos Tecnol\u00F3gicos participantes"
				},
				lugares:[
							{
								nombre: 'Escuelas de nivel b\u00E1sico y medio superior',
								latlong: "25.4267244, -100.99542539999999"
							}
						],
				horarios: [
					'9:00-10:00',
					'11:00-12:00',
					'15:00-16:00'
				]
			},
			{ 
				id:6,
				title: '23 Febrero',
				actividad: {
					title: "Toma de fotograf\u00EDa oficial",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.441544, -100.992572"
							}
						],
				horarios: [
					'18:00-21:00'
				]
		},

			{ 
				id: 7,
				title: '24 Febrero',
				actividad: {
					title: "Izamiento de bandera",
					desc: "Incineraci\u00F3n de bandera y abanderamiento"
				},
				lugares:[
							{
								nombre: 'Parque las maravillas',
								latlong: "25.414002, -100.963048"
							},
							{
								nombre: '69 b/i de la 6ª zona militar',
								latlong: "25.371420, -101.010741"
							}
						],

				horarios: [
					'8:00 – 9:00'
				]
			},
			{ 
				id: 8,
				title: '24 Febrero',
				actividad: {
					title: "Ofrenda floral",
					desc: "Personaje ilustre"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.441544, -100.992572"
							}
						],

				horarios: [
					'11:00'
				]
			},

			{ 
				id:9,
				title: '24 Febrero',
				actividad: {
					title: "Ceremonia de Inauguraci\u00F3n",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Estadio de b\u00E9isbol Fco. I Madero',
								latlong: "25.4335048,-100.9792932"
							}
						],

				horarios: [
					'18:00 – 20:00'
				]
			},

			{ 
				id:10,
				title: '25 Febrero',
				actividad: {
					title: "Presentaciones en municipios",
					desc: "Ramos Arizpe, Arteaga, Parras de la Fuente y General Cepeda"
				},
				lugares:[
							{
								nombre: 'Áreas acordadas con los municipios',
								latlong: "25.5402974,-100.950337"
							}
						],

				horarios: [
					'10:00 – 12:00'
				]
			},
			{ 
				id: 11,
				title: '25 Febrero',
				actividad: {
					title: "Presentaciones en plazas p\u00FAblicas",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Alameda Zaragozas',
								latlong: "25.435572, -101.006237"
							},
							{
								nombre: 'Plaza de Armas',
								latlong: "25.421711, -101.000392"
							},
							{
								nombre: 'Frontispicio del ITS',
								latlong: "25.441544, -100.992572"
							},
							{
								nombre: 'Jard\u00EDn de los Cedros y los Olivos',
								latlong: "25.463203, -100.963938"
							},
							{
								nombre: 'Plaza M\u00E9xico',
								latlong: "25.412317, -101.000170"
							},
							{
								nombre: 'Biblio parque Sur',
								latlong: "25.389287, -101.013246"
							},
							{
								nombre: 'Plaza del Congreso',
								latlong: "25.432562, -100.995975"
							},
							{
								nombre: 'Parque las Maravillas',
								latlong: "25.414002, -100.963048"
							},
						],

				horarios: [
					'17:00 – 19:00'
				]
			},
			{
				id: 12,
				title: '26 Febrero',
				actividad: {
					title: "Desfile por las calles de Saltillo",
					desc: "Inicia en el Teatro de la Ciudad, baja por Blvd. V.Carranza y termina en el ITS"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.433781, -100.999990"
							}
						],

				horarios: [
					'9:00 - 10:30'
				]
			},
			{
				id: 13,
				title: '26 Febrero',
				actividad: {
					title: "Ceremonia de Clausura",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.441544, -100.992572"
							}
						],

				horarios: [
					'11:00 - 12:30'
				]
			},
		],
		selected = null,
		previous = null;
		vm.tabs = tabs;
		vm.selectedIndex = 2;
	}
}