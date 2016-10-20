$(function() {

	$('.portfolio-items').mixItUp({
	animation: {
		effects: 'fade rotateY(-90deg)',
		duration: 500
	}
	});

	$('.open-popup-link').magnificPopup({
		removalDelay: 300,
	  type:'inline',
	  midClick: true ,
		mainClass: 'mfp-fade'
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".c-hamburger").toggleClass("is-active");
	}).append("<span>");

	$(".c-hamburger").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(window).resize(function() {
		var w = $(window).width();
		if (w >= 768 && ($(".top_mnu").is(":visible"))){
			$(".top_mnu").fadeOut(600);
			$(".c-hamburger").removeClass("is-active")
		}
	});

	$(".item-country").each(function(i) {
		$(this).find("button").attr("data-mfp-src", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	if( device.desktop())
	{
		var x = 0;
		var timerId = setInterval(function(){
				x-=1;
				$('.carousel-fade .active img').css('left', x);

		}, 50);

		$('.carousel').carousel({
		  interval: 5000,
		 	pause: null
		})
		$('#myCarousel').on('slide.bs.carousel', function () {
			$('.carousel-fade item img').css('left', 0);
			$('.carousel-fade img').css('opacity', 1);
			$('.carousel-fade .active img').css('opacity', 0);
			x = 0;

		});
	}

	if($(window).width() >= 1200)
	{
		$(".carousel-fade .item").css("height", $(window).height() - 160);
		$(".carousel-fade .carousel-caption").css("height", $(window).height() - 160);
	}
	 $(".top_nav a").mPageScroll2id();
	 $('#myForm').validator();
});

(function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();
