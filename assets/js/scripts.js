! function (t) {
	"use strict";
	jQuery(document).ready(function () {
		function o() {
			var o = t("body").find('[data-toggle="modal"]');
			o.on("click", function () {
				var o = t(this).data("target"),
					a = t("#video-modal iframe").attr("src"),
					e = a + "?autoplay=1";
				t(o + " iframe").attr("src", e), t(o + " button.close").on("click", function () {
					t(o + " iframe").attr("src", a)
				}), t(".modal").on("click", function () {
					t(o + " iframe").attr("src", a)
				})
			})
		}
		t(window).on("load", function () {
			t(".preloader").fadeOut(), t(".preloader-area").delay(350).fadeOut("slow")
		}), o(), t(".work-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: !0
			}
		}), t(".testimonial-list").owlCarousel({
			items: 1,
			autoPlay: !0,
			navigation: !1,
			itemsDesktop: [1199, 1],
			itemsDesktopSmall: [980, 1],
			itemsTablet: [768, 1],
			itemsTabletSmall: !1,
			itemsMobile: [479, 1],
			autoHeight: !0,
			pagination: !0
		}), t(".partner_list").owlCarousel({
			items: 6,
			autoPlay: !0,
			navigation: !1,
			itemsDesktop: [1199, 6],
			itemsDesktopSmall: [980, 6],
			itemsTablet: [768, 3],
			itemsTabletSmall: !1,
			itemsMobile: [479, 1],
			autoHeight: !1,
			pagination: !1
		}), t(".counter-number").counterUp({
			time: 2e3,
			delay: 10
		}), t(".work-inner").mixItUp(), t(document).on("click", "", function (o) {
			t(o.target).is("a") && "dropdown-toggle" != t(o.target).attr("class") && t(this).collapse("hide")
		}), t("body").scrollspy({
			target: ".navbar-collapse",
			offset: 195
		}), t(window).on("scroll", function () {
			t(window).scrollTop() > 200 ? t(".header-top-area").addClass("menu-bg") : t(".header-top-area").removeClass("menu-bg")
		}), t('[data-toggle="tooltip"]').tooltip(), t("a.smoth-scroll").on("click", function (o) {
			var a = t(this);
			t("html, body").stop().animate({
				scrollTop: t(a.attr("href")).offset().top - 60
			}, 1e3), o.preventDefault()
		}), t("a.scrollToBtm").on("click", function (o) {
			t("html, body").animate({
				scrollTop: t(".afterHeader").offset().top
			}, 1e3), o.preventDefault()
		});
		var a = {
			lat: "48.856614",
			lon: "2.352222"
		};
		try {
			t(".map").gmap3({
				action: "addMarker",
				latLng: [a.lat, a.lon],
				map: {
					center: [a.lat, a.lon],
					zoom: 5
				}
			}, {
				action: "setOptions",
				args: [{
					scrollwheel: !1
				}]
			})
		} catch (e) {}
		t(window).scroll(function () {
			var is_scrolling = false;
        	
			if(t(window).width() > 992){
				if(t('.experience_section .section_block-img').visible(true)){
					is_scrolling = true;
				
					if (is_scrolling == true) {

						setTimeout(function(){
							t('.experience_section .section_block-img').addClass('fadeInLeft');
							t('.experience_section .section_block-desc').addClass('fadeInRight');
						}, 300);
						
						is_scrolling = false;
					}
				}
				if(t('.help_block .help_wrapper').visible(true)){
					is_scrolling = true;
				
					if (is_scrolling == true) {

						setTimeout(function(){
							t('.help_block .help_wrapper').addClass('fadeInLeft');
						}, 600);
						setTimeout(function(){
							t('.help_block .help_grid').addClass('fadeInRight');
						}, 800);
						
						is_scrolling = false;
					}
				}
			}
			t(this).scrollTop() > 250 ? t(".scrollup").fadeIn() : t(".scrollup").fadeOut()
		}), t(".scrollup").on("click", function () {
			return t("html, body").animate({
				scrollTop: 0
			}, 800), !1
		}), t(".contactBtnMove").on("click", function () {
			t("html, body").animate({
				scrollTop: t("#contact").offset().top
			}, 2e3)
		}), t(".navbar-nav li a").on("click", function(){
			t(".navbar-nav li .dropdown").addClass('is_active');
		})
    })
}(jQuery);
