$(document).ready( function(){

    var mainswiper = new Swiper('.main-container', {
        slidesPerView: 1,
        spaceBetween: 30,

        loop: true,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: 'boolen'
        // },
    });

    var mainMenuSlide = new Swiper('.main_menu-container', {
        slidesPerView: 10,
        breakpoints: {

            1200: {
                slidesPerView: 10,
                spaceBetween: 30,
            },
            
            900: {
                slidesPerView: 7,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 7,
                spaceBetween: 20,
            },

            500: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

        },
    });

    var subMenuSlide = new Swiper('.sub_menu-container', {
        slidesPerView: 6,

        breakpoints: {

            1200: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
 
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

            500: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            300: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        },
    });

    $('.tablinks').each( function(){
        $(this).click( function(){            
            //클릭했을때 탭에 들어오는것 
            $(".tablinks").removeClass("sub_menu_active");
            $(this).addClass("sub_menu_active");

            $(".tabcontent").removeClass("tab_active");
            $(".tabcontent").css("display", "none");

            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");

        });
        
    });

    $('.menu_icon,.menu_bg,.close_btn').click( function(){
        $(".left_menu,.menu_bg,.close_btn").toggle();
        
    });

    


});