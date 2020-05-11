$(document).ready( function(){


    //main_slide banner
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

    //menu_slide
    var mainMenuSlide = new Swiper('.main_menu-container', {
        slidesPerView: 10,
        breakpoints: {

            1400: {
                slidesPerView: 10,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 8,
                spaceBetween: 30,
            },
            
            900: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 5,
                spaceBetween: 20,
            },


            700: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            420: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        },
    });

    //tab_menu slide
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
            }
        }
    });

    //ft_menu slide
    var ftMenuSlide = new Swiper('.ft_menu-container', {
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
                slidesPerView: 4,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
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
        $(".left_menu,.menu_bg,.close_btn").toggle()
    });

    //header_M_left search_icon toggle
    $('.header_M_left #search_icon').click( function(){
        $('.search_input,.search_button').toggle();
        $('.hb_menu').css({'padding-top':'10px'});
    });

    //left_tab menu
    $('.left_tablinks').each( function(){
        $(this).click( function(){

            $(".left_tablinks").removeClass("catego_active");
            $(this).addClass("catego_active");

            $(".left_tab").removeClass("left_tab_active");
            $(".left_tab").css("display", "none");

            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");
        });

    });



});