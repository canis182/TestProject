var main = function() {
    $('.icon-menu').click(function() { 
        $('.menu_media').animate({ 
            right: '0px' 
        }, 200); 
    });
    $('.icon-close').click(function() { 
        $('.menu_media').animate({ 
            right: '-100%' 
        }, 200); 
        
    $('body').animate({ 
           right: '0px' 
        }, 200); 
    });
};
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
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

	$(window).on("scroll", function() {
		var scrollFromTop = $(this).scrollTop();
		if(scrollFromTop > 200){
			$(".scroll").addClass("active");
		}else{
			$(".scroll").removeClass("active");
		}
	});

	$(".scroll").on("click", function(event) {
		event.preventDefault();
		$("html, body").animate({
			scrollTop: $("body").offset().top
		}, 700);
	});
	
});



