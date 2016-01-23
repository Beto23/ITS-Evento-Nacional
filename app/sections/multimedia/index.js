module.exports = function(){
	require('./lightgallery.css')
	require('./multimedia.styl')
	var mulimediaModule = angular.module('Multimedia',[]);
	require('./multimedia.controller.js')(mulimediaModule);
}