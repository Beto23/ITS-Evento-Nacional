var Popup = {
	open: function(){
		$('.Popup').addClass('Popup-on');
	},
	close: function(){
		$('.Popup').removeClass('Popup-on');
	},
	fill: function(section){
		$('#popup-content').html(require('../sections/'+section+'/'+section+'.html'));
	}
}

module.exports = Popup;