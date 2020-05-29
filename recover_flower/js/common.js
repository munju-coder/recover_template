$(document).ready( function(){

    //메뉴아이콘 클릭시 left_menu toggle
    $('.menu_icon,.menu_bg,.close_btn').click( function(){
        $(".left_menu,.menu_bg,.close_btn").toggle()
    });


    //left_menu tab
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

});