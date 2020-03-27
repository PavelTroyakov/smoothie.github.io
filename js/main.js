$(function(){
	
	$('.heading__slider').slick({
		arrows: false,
		vertical: true,
		dots: true,
		dotsClass:'header-dots',
		autoplay: 1000,
	});

	$('.btn__menu').on('click', function () {
		$('.menu__list').slideToggle();

	});

});