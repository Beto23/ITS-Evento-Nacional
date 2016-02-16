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
					title: "Curso-taller de actualizaci&#243;n t&#233;cnica",
					desc: "Dirigido a Instructores del nivel b&#225;sico y medio superior de la localidad T&#233;cnica"
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
					title: "Reuni&#243;n t&#233;cnica",
					desc: "Equipo de apoyo t&#233;cnico c&#237;vico e Instructores de escoltas y bandas de guerra de los institutos participantes."
				},
				lugares:[
						{
							nombre: 'Auditorio de Gesti&#243;n Tecnol&#243;gica y Vinculaci&#243;n del ITS.',
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
					title: "Burrito bandero 2016",
					desc: "Concurso de bandas de guerra de Escuelas nivel primaria"
				},
				lugares:[
							{
								nombre: 'Estadio IT Saltillo',
								latlong: "25.442400, -100.994395"
							}
						],

				horarios: [
					'10:00'
				]
			},
			{
				id:4,
				title: '21 Febrero',
				actividad: {
					title: "Registro de delegaciones",
					desc: "Entrega de documentos oficiales, Asignaci&#243;n de Hotel, Programaci&#243;n de actividades y Refrigerio"
				},
				lugares:[
							{
								nombre: 'Edificio de Vinculaci#243;n',
								latlong: "25.442400, -100.994395"
							}
						],

				horarios: [
					'07:00 - 9:00'
				]
			},
			{ 
				id:5,
				title: '21 y 22 Febrero',
				actividad: {
					title: "Ensayos generales",
					desc: "Escoltas y bandas de guerra de los tecnol#243;gicos"
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
								nombre: 'Estadio Ol&#237;mpico',
								latlong: "25.431873, -100.979790"
							}
					],

				horarios: [
					'09:00 - 14:00',
					'17:00 - 21:00'
				]
			},
			{ 
				id:6,
				title: '23 Febrero',
				actividad: {
					title: "Visita a escuelas",
					desc: "120 presentaciones de las Escoltas y Bandas de Guerra de los Institutos Tecnol&#243;gicos participantes"
				},
				lugares:[
							{
								nombre: 'Escuelas de nivel b&#225;sico y medio superior',
								latlong: "25.4267244, -100.99542539999999"
							}
						],
				horarios: [
					'9:00 - 10:00',
					'11:00 - 12:00',
					'15:00 - 16:00'
				]
			},
			{ 
				id:7,
				title: '23 Febrero',
				actividad: {
					title: "Toma de fotograf&#237;a oficial",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.441544, -100.992572"
							}
						],
				horarios: [
					'18:00 - 21:00'
				]
		},

			{ 
				id: 8,
				title: '24 Febrero',
				actividad: {
					title: "Izamiento de bandera",
					desc: "Incineraci&#243;n de bandera y abanderamiento"
				},
				lugares:[
							{
								nombre: 'Parque las maravillas',
								latlong: "25.414002, -100.963048"
							}
						],

				horarios: [
					'8:00 - 9:00'
				]
			},
			{ 
				id: 9,
				title: '24 Febrero',
				actividad: {
					title: "Homenaje a personajes ilustres",
					desc: "Ofrenda floral"
				},
				lugares:[
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.441544, -100.992572"
							}
						],

				horarios: [
					'11:00 - 12:00'
				]
			},

			{ 
				id:10,
				title: '24 Febrero',
				actividad: {
					title: "Ceremonia de inauguraci&#243;n",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Estadio de b&#233;isbol Fco. I Madero',
								latlong: "25.4335048,-100.9792932"
							}
						],

				horarios: [
					'18:00 - 21:00'
				]
			},

			{ 
				id:11,
				title: '25 Febrero',
				actividad: {
					title: "Presentaciones en municipios",
					desc: "Ramos Arizpe, Arteaga, Parras de la Fuente y General Cepeda"
				},
				lugares:[
							{
								nombre: '&#193;reas acordadas con los municipios',
								latlong: "25.5402974,-100.950337"
							}
						],

				horarios: [
					'10:00 - 12:00'
				]
			},
			{ 
				id: 12,
				title: '25 Febrero',
				actividad: {
					title: "Presentaciones en plazas p&#250;blicas",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Alameda Zaragoza',
								latlong: "25.435572, -101.006237"
							},
							{
								nombre: 'Plaza de Armas',
								latlong: "25.421711, -101.000392"
							},
							{
								nombre: 'Frontispicio del IT Saltillo',
								latlong: "25.433781, -100.999990"
							},
							{
								nombre: 'Plaza Sendero',
								latlong: "25.443790, -100.961180"
							},
							{
								nombre: 'Plaza M&#233;xico',
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
					'17:00 - 19:00'
				]
			},
			{
				id: 13,
				title: '25 Febrero',
				actividad: {
					title: "Convivio a participantes",
					desc: ""
				},
				lugares:[
							{
								nombre: 'Estadio IT Saltillo',
								latlong: "25.442400, -100.994395"
							}
						],

				horarios: [
					'21:00 - 24:00'
				]
			},
			{
				id: 14,
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
				id: 15,
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