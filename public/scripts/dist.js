$(function(){

	$(window).mousemove(function(event){
		var max = 30;

		var width = $(this).width();
		var height = $(this).height();

		var x = event.pageX;
		var y = event.pageY;

		var _x = ((x / width) * max) - (max / 2);
		var _y = ((y / height) * max) - (max / 2);

		$('svg.top').css({
			top: _y + 'px',
			left: _x + 'px'
		});

		$('svg.bottom').css({
			top: -_y + 'px',
			left: -_x + 'px'
		});
	});

});