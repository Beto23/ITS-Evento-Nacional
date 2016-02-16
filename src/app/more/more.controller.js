module.exports = function(ngModule){
	ngModule.controller('MoreCtrl', MoreCtrl);

	MoreCtrl.$inject = ['$scope']

	function MoreCtrl ($scope) {
		console.log('more');
		$scope.lugares = [
			{
				title: 'Museo de la Cultura Taurina',
				maps: 'https://www.google.com.mx/maps/place/Museo+de+la+Cultura+Taurina/@25.422089,-101.0084109,17z/data=!3m1!4b1!4m2!3m1!1s0x86887296f9259505:0xbebdbd293b3c34ba',
				img: 'http://1.bp.blogspot.com/-hEWDPCioSvA/U3Ts0p1PYVI/AAAAAAAAAKQ/vg6Q7x_AA4Y/s1600/Museo+Cultura+Taurina+Saltillo.jpg',
				phone: '(844) 410-20-21',
				dia: 'Martes a Domingo',
				hora: '10:00 - 18:00'
			},
			{
				title: 'Museo de la Katrina',
				maps: 'https://www.google.com.mx/maps/place/De+La+Katrina/@25.4164728,-101.0053459,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bfd6f1ebff:0xf57b8d1d16fdd00f',
				img: 'http://1.bp.blogspot.com/-oWoKGoP6pgo/U3UcOQI9heI/AAAAAAAAAKs/AQhXHY-vNTk/s1600/Museo+de+la+Katrina+Saltillo.jpg',
				phone: '(844) 414-31-48',
				dia: 'Martes a Domingo',
				hora: '10:00 - 18:00'
			},
			{
				title: 'Museo del Palacio de Gobierno',
				maps: 'https://www.google.com.mx/maps/place/Museo+de+Palacio+de+Gobierno/@25.4220072,-101.0031315,17z/data=!4m5!1m2!2m1!1smuseo+del+palacio+de+gobierno+saltillo!3m1!1s0x868872bdb1a712c5:0x65bce9eccdf7e732',
				img: 'http://4.bp.blogspot.com/-A4eHUbwNmXM/U3ZgK-uMgHI/AAAAAAAAALI/5ZFty40EQJE/s1600/Museo+del+Palacio+de+Gobieno+Saltillo.jpg',
				phone: '(844) 411-8500, Ext. 112',
				dia: 'Martes a Domingo',
				hora: '10:00 - 18:00'
			},
			{
				title: 'Museo de la Revoluci&#243;n Mexicana',
				maps: 'https://www.google.com.mx/maps/place/Revoluci%C3%B3n+Mexicana/@25.4283236,-101.0286179,13z/data=!4m5!1m2!2m1!1smuseo+de+la+revoluci%C3%B3n+mexicana+saltillo!3m1!1s0x868872bc2cc9f01f:0xd6a557a07d33109a',
				img: 'http://1.bp.blogspot.com/-qjdljk6n0mg/U3zPchAJuRI/AAAAAAAAALk/AvzjMMjk_T4/s1600/Museo+Revoluci%C3%B3n+Mexicana+Saltillo.jpg',
				phone: '(844) 410-4794',
				dia: 'Martes a Domingo',
				hora: '10:00 - 18:00'
			},
			{
				title: 'Santuario de Guadalupe',
				maps: 'https://www.google.com.mx/maps/place/Santuario+de+Guadalupe/@25.4292307,-101.0124823,17z/data=!3m1!4b1!4m2!3m1!1s0x8688729bc5b123e3:0x5162bf3a3d472f34',
				img: 'http://1.bp.blogspot.com/-_J8qX6wM5jk/U4S0uYX00aI/AAAAAAAAANg/b8rqb3QEyaA/s1600/Santuario+de+Guadalupe+Saltillo.jpg',
				phone: ' (844) 414-9494 / (844) 410-2508',
				dia: 'Lunes a Domingo',
				hora: ' 7:00 - 13:00 y 16:00 - 20:00'
			},
			{
				title: 'Museo del Desierto',
				maps: 'https://www.google.com.mx/maps/place/Museo+del+Desierto/@25.4136879,-100.9660559,17z/data=!4m5!1m2!2m1!1sMuseo+del+Desierto!3m1!1s0x86880d2f26f7a591:0x90ace5bad1b0b4a7',
				img: 'http://1.bp.blogspot.com/-ZO6wi0DmiHU/U07K-anM_sI/AAAAAAAAAIk/T8XbyHKAKPE/s1600/Museo+del+Desierto+Saltillo.jpg',
				phone: '(844) 9869000',
				dia: 'Martes a Domingo',
				hora: '10:00 - 17:00'
			},
			{
				title: 'Centro Cultural Teatro Garc&#237;a Carrillo',
				maps: 'https://www.google.com.mx/maps/place/Centro+Cultural+Teatro+Garcia+Carrillo/@25.4235995,-101.0034732,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bd0fc2de93:0x51f52df40576fa60',
				img: 'http://1.bp.blogspot.com/-zWAFI9GObUQ/U07DW4dxsNI/AAAAAAAAAH4/W2XGxSE4rsw/s1600/CC+Teatro+Garc%C3%ADa+Carrillo+Saltillo.jpg',
				phone: '(844) 4142426',
				dia: 'Martes a S&#225;bado',
				hora: '10:00 - 14:00 y 16:00 - 17:00'
			},
			{
				title: 'Museo Rub&#233;n Herrera',
				maps: 'https://www.google.com.mx/maps/place/Museo+Rub%C3%A9n+Herrera/@25.4205917,-101.0002209,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bc03e010c9:0xfb00a833cc88c38a',
				img: 'http://1.bp.blogspot.com/-nL3_svSI4B0/U07B8XXenlI/AAAAAAAAAHs/11oXD3yA83E/s1600/Museo+Rub%C3%A9n+Herrera+Saltillo.jpg',
				phone: '(844) 4125939',
				dia: 'Martes a Domingo',
				hora: '10:00 - 19:00'
			},
			{
				title: 'Centro Cultural Vito Alessio Robles',
				maps: 'https://www.google.com.mx/maps/place/Centro+Cultural+Vito+Alesio+Robles/@25.4230445,-101.0015041,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bcf60685e5:0x65425a5977bed4ab',
				img: 'http://3.bp.blogspot.com/-DDuvrot5F7U/U07A8ccAFII/AAAAAAAAAHg/5nskV_FJuf4/s1600/CC+Vito+Alessio+Robles+Saltillo.jpg',
				phone: '(844) 4126180',
				dia: 'Martes a S&#225;bado',
				hora: ' 10:00 - 18:00'
			},
			{
				title: 'Centro Cultural Casa Purcell',
				maps: 'https://www.google.com.mx/maps/place/Centro+Cultural+Casa+Purcell/@25.4225714,-101.0021089,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bc50de17c9:0x1a3696014624497',
				img: 'http://1.bp.blogspot.com/-PAxFNURdcG8/U07ARgI_W_I/AAAAAAAAAHY/diXmPn6z5WU/s1600/Casa+Purcell+Saltillo.jpg',
				phone: '(844) 414-5536',
				dia: 'Martes a Domingo',
				hora: ' 10:00 - 19:00'
			},
			{
				title: 'Recinto del Patrimonio Cultural de la UAdeC',
				maps: 'https://www.google.com.mx/maps/place/Recinto+del+Patrimonio+Cultural+Universitario/@25.422409,-101.0022463,17z/data=!4m5!1m2!2m1!1sRecinto+del+Patrimonio+Cultural+de+la+UAdeC!3m1!1s0x868872bc51dbe0ab:0x1670805fb393c0e2',
				img: 'http://1.bp.blogspot.com/-rr0gNhTKpqE/U06_JBPPJNI/AAAAAAAAAHQ/kBGm_bKa1U0/s1600/Recinto+Cultural+Universitario.jpg',
				phone: '(844) 410-9705',
				dia: ' Martes a Domingo',
				hora: ' 10:00 - 18:00'
			},
			{
				title: 'Palacio de Gobierno de Coahuila',
				maps: 'https://www.google.com.mx/maps/place/Palacio+de+Gobierno/@25.4219681,-101.0031203,17z/data=!4m5!1m2!2m1!1sPalacio+de+Gobierno+de+Coahuila!3m1!1s0x868872bdb3f161fb:0xebdfb407ff3eaa8e',
				img: 'http://2.bp.blogspot.com/-rujK7oy-cK8/U069lL43OKI/AAAAAAAAAHE/3rYCUXF9KUA/s1600/Palacio+Gobierno+Coahuila.jpg',
				phone: '(844) 4118600',
				dia: 'Lunes a Viernes',
				hora: '9:00 - 21:00'
			},
			{
				title: 'Catedral de Santiago',
				maps: 'https://www.google.com.mx/maps/place/Catedral+de+Santiago+Apostol/@25.4215972,-101.0018917,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bc49d26771:0xc66a48802215538b',
				img: 'http://2.bp.blogspot.com/-VV12hdneyJU/U067DyRFTWI/AAAAAAAAAG4/10x3yDiOC-g/s1600/Catedral.jpg',
				phone: '(844) 414-0230',
				dia: 'Lunes a Domingo',
				hora: '9:00 - 13:00 y 15:00 - 19:00'
			},
			{
				title: 'Museo del Sarape y Trajes Mexicanos',
				maps: 'https://www.google.com.mx/maps/place/Museo+del+Sarape+y+Trajes+Mexicanos/@25.4209857,-101.0039587,17z/data=!3m1!4b1!4m2!3m1!1s0x868872b7a2c9b44f:0x6489383173686d87',
				img: 'http://4.bp.blogspot.com/-bRILGd4If1Y/U02A7BRNziI/AAAAAAAAAFo/XZJPc4wvWYU/s1600/Museo+Sarape.jpg',
				phone: '(844) 4816900',
				dia: 'Martes a S&#225;bado',
				hora: '10:00 - 18:00 y Domingos 11:00 am a 18:45'
			},
			{
				title: 'Museo de las Aves de M&#233;xico',
				maps: 'https://www.google.com.mx/maps/place/Museo+de+Las+Aves+de+M%C3%A9xico/@25.4166814,-101.0046639,17z/data=!3m1!4b1!4m2!3m1!1s0x868872bfce14a9eb:0x5b765f491e4819b1',
				img: 'http://4.bp.blogspot.com/-ZS_NhYOSDbg/U02Dlh8GB8I/AAAAAAAAAF0/wGKBqK8iPb4/s1600/Museo+de+las+Aves.jpg',
				phone: '(844) 4140167',
				dia: 'Martes a Domingo',
				hora: '10:00 - 18:00 Domigos 11:00 - 18:45'
			}
		]
	}
}
