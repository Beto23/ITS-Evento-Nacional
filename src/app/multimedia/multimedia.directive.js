module.exports = function(ngModule){
	ngModule.directive('sectionMultimedia', sectionMultimedia);

	function sectionMultimedia(){
		return {
			restrict: 'E',
			template: require('./multimedia.html'),
			controller: 'MultimediaCtrl'
		}
	}
}