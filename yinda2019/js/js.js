$(document).ready(function(){
	$('.box a').mouseenter(function(){
		// $(this).stop().animate({"top":"-478px"}, 200); 
		$(this).stop().find('.toll_img').fadeOut();
		$(this).stop().find('.toll_info').fadeIn();
	})
	$('.box a').mouseleave(function(){
		// $(this).stop().animate({"top":"0"}, 200); 
		$(this).stop().find('.toll_img').fadeIn().css('width','345px');
		$(this).stop().find('.toll_info').fadeOut();
	})
})