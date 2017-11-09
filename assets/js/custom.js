/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Main Slider JS
02 - Youtube Popup JS
03 - Testimonial Slider JS
04 - Brand Slider JS
05 - Responsive Menu
06 - Preloader
07 - Btn To Top JS



-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        /* 
        =================================================================
        01 - Main Slider JS
        =================================================================	
        */
        
        $(".fina-slide").owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false
        });
        
        $(".fina-slide").on("translate.owl.carousel", function(){
            $(".fina-main-slide h2, .fina-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".fina-main-slide .fina-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".fina-slide").on("translated.owl.carousel", function(){
            $(".fina-main-slide h2, .fina-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".fina-main-slide .fina-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        $(".fina-slide").on("translate.owl.carousel", function(){
            $(".fina-main-slide h4").removeClass("animated slideInDown").css("opacity", "0");
        });
        $(".fina-slide").on("translated.owl.carousel", function(){
            $(".fina-main-slide h4").addClass("animated slideInDown").css("opacity", "1");
        });
        
        
        /* 
        =================================================================
        02 - Youtube Popup JS
        =================================================================	
        */
        
         $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
            });
        
        
        /* 
        =================================================================
        03 - Testimonial Slider JS
        =================================================================	
        */
        $('.fina-testimonial').owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            margin:20,
            touchDrag:false,
            mouseDrag:false,
            nav: false,
            dots: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            autoplayHoverPause:true
        });
        
        /* 
        =================================================================
        04 - Brand Slider JS
        =================================================================	
        */
        $(".brand-slider").owlCarousel({
            autoplay:true,
            loop:true,
            margin:20,
            touchDrag:true,
            mouseDrag:true,
            nav: false,
            dots: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            autoplayHoverPause:true,
            responsive:{
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });
        
        /* 
        =================================================================
        05 - Responsive Menu
        =================================================================	
        */
        $("ul#fina_navigation").slicknav({
            prependTo: ".fina-responsive-menu"
        });
        
        
        /* =================================
        06 - Preloader
        =================================== */
        $(".loader").delay(400).fadeOut();
        $(".animationload").delay(400).fadeOut("fast");
        
        /* 
        =================================================================
        07 - Btn To Top JS
        =================================================================	
        */
        if ($("body").length) {
            var btnUp = $('<div/>', {
                'class': 'btntoTop'
            });
            btnUp.appendTo('body');
            $(document).on('click', '.btntoTop', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 700);
            });
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
                else $('.btntoTop').removeClass('active');
            });
        }
	

    });
}(jQuery));	
