

$(function () {
	$(window).scroll(function() {
	    $('.stats-work-counter-block').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("bounce");
	        }
	    });
	});
})