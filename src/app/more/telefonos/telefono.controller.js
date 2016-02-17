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
				lugar : 'Hospital la Concepción',
				telefono : '(844) 4161 022  / 4161082  / 4155917',
				img: 'http://www.cmh.mx/imagenes/asociados/img26.jpg',
				maps: 'https://www.google.com.mx/maps/place/La+Concepci%C3%B3n/@25.4615707,-100.983377,17z/data=!4m5!1m2!2m1!1sHospital+la+Concepci%C3%B3n!3m1!1s0x86886d4b8abb8f31:0x5d3d3fb94fe47a29'
			},
			{
				lugar : 'Hospital Christus Muguerza',
				telefono : '(844) 411 7000 al 09 / 411 7047',
				img: 'https://pbs.twimg.com/profile_images/529418330986127362/MTGJPGJo_400x400.png',
				maps: 'https://www.google.com.mx/maps/place/Christus+Muguerza+Hospital+Saltillo/@25.4616133,-100.9987463,14z/data=!4m5!1m2!2m1!1sHOSPITAL+CHRISTUS+MUGUERZA!3m1!1s0x86882202bbbb20bd:0x803240b2ca922fc7'
			}
		]
	}
}
