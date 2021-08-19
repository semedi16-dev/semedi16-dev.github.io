$(document).ready(function () {

	$("#burger").click(function () {
		$(this).toggleClass("toggle");
		$("header").toggleClass("toggle");
	});

	$(window).on("scroll load", function () {
    
		$("#burger").removeClass("toggle");
    $("header").removeClass("toggle");
    
    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $(".top").hide();
    }

	});

	//smooth scrolling
  $('a[href*="#"]').on('click', function (e) {

    // e.preventDefaut(e);

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    );
  });

});

