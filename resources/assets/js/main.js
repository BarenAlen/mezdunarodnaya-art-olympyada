$(function() {
	$('#promo-slider').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: true,
	  	prevArrow: $(".promo-slider_prev"),
	  	nextArrow: $(".promo-slider_next")
	});

	$("#review-slider").slick({
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	dots: true,
	  	dotsClass: "review-slider_dots",
	  	appendDots: $("#review-slider-dots"),
	  	responsive: [
	    {
	      breakpoint: 980,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('#partners-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $(".partners-slider_prev"),
		nextArrow: $(".partners-slider_next"),
		responsive: [
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$(".slider-toggler").click(function(e) {
		e.preventDefault();

		$(this).toggleClass("active").next().slideToggle(250);
	});

	$(".dropdown-toggler").click(function(e) {
		e.preventDefault();

		$(this).toggleClass(".dropdown-opened").next().slideToggle(200);

		$(this).one("blur", function() {
			$(this).removeClass("dropdown-opened").next().hide();
		});
	});

	$('#contacts-slider').slick({
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	arrows: true,
  		centerMode: true,
  		centerPadding: '0px',
	  	prevArrow: $(".contacts-slider_prev"),
	  	nextArrow: $(".contacts-slider_next"),
	  	responsive: [
		{
			breakpoint: 860,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$(".fancy-award").fancybox();

	$("#slicky-nav").sticky({topSpacing:0});
});