$(document).ready(function () {
    /* Nav Toggle */
    $('.toggle').on('click', function(){
        $('.toggle, .nav__bar ul').toggleClass('active');
    });
    
    /* Fixed Header */ 
	let header = $(".nav__items");
	let intro = $(".header");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);

	});
    
    function checkScroll(scrollPos, introH) {

		if( scrollPos > introH - 75) {
			let introH = intro.innerHeight();
			header.addClass("fixed-top");
		} else {
			header.removeClass("fixed-top");
		}
 	 }
      
    /* Smooth scroll */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$('.toggle, .nav__bar ul').removeClass("active");

		$("html, body").animate ({
			scrollTop: elementOffset-70 
		}, 700);
	});
    
    $('.nav__link').click(function(e){
        e.preventDefault();
        $('.nav__link').removeClass('active');
        $(this).addClass('active'); 
    });
    
});