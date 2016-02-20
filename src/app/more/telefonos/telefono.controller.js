module.exports = function(ngModule){
	ngModule.controller('TelController', TelController);

	TelController.$inject = ['$scope'];
	function TelController ($scope) {
		$scope.emergencias = [
			{
				lugar : 'Cruz roja',
				telefono : '(844) 412 1206',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_the_Red_Cross.svg/150px-Flag_of_the_Red_Cross.svg.png',
				maps: 'https://www.google.com.mx/maps/place/Cruz+Roja+Mexicana/@25.4146546,-100.9755885,17z/data=!3m1!4b1!4m2!3m1!1s0x868872b245cb311b:0xdad91b6db8a092d5'
			},
			{
				lugar : 'Hospital Universitario',
				telefono : '(844) 412 3000  /4123 155  / 414 6089',
				img: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Uac.gif',
				maps: 'https://www.google.com.mx/maps/place/Hospital+Universitario+de+Saltillo/@25.4274937,-101.016436,17z/data=!3m1!4b1!4m2!3m1!1s0x8688729ad6a0b2e5:0x1eddf4a7ab0b69b5'
			},
			{
				lugar : 'Hospital la Concepci&#243;n',
				telefono : '(844) 4161 022  / 4161082  / 4155917',
				img: 'http://www.cmh.mx/imagenes/asociados/img26.jpg',
				maps: 'https://www.google.com.mx/maps/place/La+Concepci%C3%B3n/@25.4615707,-100.983377,17z/data=!4m5!1m2!2m1!1sHospital+la+Concepci%C3%B3n!3m1!1s0x86886d4b8abb8f31:0x5d3d3fb94fe47a29'
			},
			{
				lugar : 'Hospital Christus Muguerza',
				telefono : '(844) 411 7000 al 09 / 411 7047',
				img: 'https://pbs.twimg.com/profile_images/529418330986127362/MTGJPGJo_400x400.png',
				maps: 'https://www.google.com.mx/maps/place/Christus+Muguerza+Hospital+Saltillo/@25.4616133,-100.9987463,14z/data=!4m5!1m2!2m1!1sHOSPITAL+CHRISTUS+MUGUERZA!3m1!1s0x86882202bbbb20bd:0x803240b2ca922fc7'
			},
			{
				lugar : 'Polic&#237;a y Tr&#225;nsito',
				telefono : '066 / (844) 414 1616',
				img: 'https://pbs.twimg.com/profile_images/2404256820/cid_62E0FE9C-DA6D-44E6-A089-07528E0D08ED.jpg',
				maps: 'https://www.google.com.mx/maps/place/Direcci%C3%B3n+de+Policia+Preventiva+Municipal/@25.415586,-100.976748,15z/data=!4m2!3m1!1s0x0:0x31db855bd22aaf3e'
			},
			{
				lugar : 'Cruz roja',
				telefono : '(065 / (844) 4148140 / 4143333 / 4148335',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_the_Red_Cross.svg/150px-Flag_of_the_Red_Cross.svg.png',
				maps: 'https://www.google.com.mx/maps/place/Esc.+Ma.+Josefa+Medina+de+Valle+Arizpe+Cruz+Roja+Mexicana/@25.442594,-101.0183231,13z/data=!4m5!1m2!2m1!1scruz+roja!3m1!1s0x868872a56e0ca305:0x46e4bfc6bd8b294'
			},
			{
				lugar : '&#225;ngeles Verdes',
				telefono : '078 / (844) 412 4050',
				img: 'http://www.periodicoenfoque.com.mx/wp-content/uploads/2013/08/%C3%81ngeles-Verdes.jpg',
				maps: 'https://www.google.com.mx/maps/place/Corporaci%C3%B3n+de+Servicios+al+Turista+%C3%81ngeles+Verdes/@25.4332049,-100.9998569,17z/data=!3m1!4b1!4m2!3m1!1s0x868872a14b3321ab:0x24b5b5439c538ddc'
			},
			{
				lugar : 'Polic&#237;a Estatal',
				telefono : '066  / (844) 434 0945 /434 0810 /434 0450',
				img: 'http://201.144.124.181:8080/ces/NUEVA/wp-content/uploads/2013/10/POLICIA-ESTATAL-2.jpg',
				maps: 'https://www.google.com.mx/maps/place/Comisi%C3%B3n+Estatal+de+Seguridad/@25.4121638,-100.9779788,17z/data=!3m1!4b1!4m2!3m1!1s0x86880d342515ccab:0xa9e861a95a55eb78'
			}
		]

		$scope.telTec = [
			{
				area : 'Tecnol&#243;gico',
				telefono : '(844) 438-95-00',
				img: './img/logoITS.png'
			},
			{
				area : 'Direcci&#243;n',
				telefono : '(844) 438-95-02',
				img: './img/logoITS.png'
			},
			{
				area : 'Sub. Dir. Administrativa',
				telefono : '(844) 438-95-12',
				img: './img/logoITS.png'
			},
			{
				area : 'Sub. Dir. Planeaci&#243;n',
				telefono : '(844) 438-95-06',
				img: './img/logoITS.png'
			},
			{
				area : 'Sub. Dir. Acad&#233;mica',
				telefono : '(844) 438-95-04',
				img: './img/logoITS.png'
			},
			{
				area : 'Actividades Extraescolares',
				telefono : '(844) 438-95-27',
				img: './img/logoITS.png'
			},
			{
				area : 'Comunicaci&#243;n y Difusi&#243;n',
				telefono : '(844) 438-95-10',
				img: './img/logoITS.png'
			},
			{
				area : 'Gesti&#243;n Tecnol&#243;gica y Vinculaci&#243;n',
				telefono : '(844) 438-95-17',
				img: './img/logoITS.png'
			},
			{
				area : 'Radio Tecnol&#243;gico  ',
				telefono : '(844) 438-95-23',
				img: './img/logoITS.png'
			}
		]
	}
}
