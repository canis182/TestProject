var main = function() {
    $('.icon-menu').click(function() { 
        $('.menu_media').animate({ 
            right: '0px' 
        }, 200); 
    });
    $('.icon-close').click(function() { 
        $('.menu_media').animate({ 
            right: '-285px' 
        }, 200); 
        
    $('body').animate({ 
           right: '0px' 
        }, 200); 
    });
};
$(document).ready(main); 
$(document).ready(function() {

	$('.sliders').slick({
	    infinite: 		true,
	    slidesToShow: 	1,
	    slidesToScroll: 1,
	    arrows: 		false,
	    autoplay: 		true,
	    autoplaySpeed: 	2000,
	    dots: 			true,
	});
	$('.works-sliders').slick({
	    infinite: 		true,
	    slidesToShow: 	1,
	    slidesToScroll: 1,
	    arrows: 		true,
	    autoplay: 		true,
	    autoplaySpeed: 	2000,
	});

	$(".menu").on("click", function(){
		$(this).next().toggle();
	});

});


