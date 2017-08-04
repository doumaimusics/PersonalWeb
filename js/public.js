$(function(){
	$(window).scroll(function(){
		var $scrollTop = $(this).scrollTop();
		$('.m-css-content').each(function(){
			var index = $(this).index();
			var $louceTop = $('.m-css-content').eq(index).offset().top+200;
			if ($louceTop>$scrollTop) {
				$('#u-item-list li').removeClass('active').eq(index).addClass('active');
				return false;
			}
		})
	})
    
    $('#u-item-list li').click(function() {
    	$(this).addClass('active').siblings().removeClass('active');
         var index = $(this).index();
         var louceTop = $('.m-css-content').eq(index).offset().top;
         $('html,body').animate({scrollTop:louceTop},1000);
    });
})