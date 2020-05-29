$(document).ready( function(){


    //main_banner slide
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

    //tab_menu slide (메인배너 하단 메뉴 슬라이드)
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



    //메인배너 하단 메뉴 탭 이벤트
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

    //header_M_left search_icon toggle (헤더 모바일 아이콘 클릭시 이벤트)
    $('.header_M_left #search_icon').click( function(){
        $('.search_input, .search_button').toggle();
        $('.hb_menu').css({'padding-top':'10px'});

        $( window ).resize(function() {
            //console.log($( window ).width());
            var width = $( window ).width();
        
            if(width > 768)
            {
                $("#search_input").css('display','block');
                $('.hb_menu').css({'padding-top':'30px'});
            }
            else
            {
                $("#search_button").css('display','block');
                $('.hb_menu').css({'padding-top':'30px'});
            }
        });    
    
    });


});