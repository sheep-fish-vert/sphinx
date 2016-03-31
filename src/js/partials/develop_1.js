try{

    // header script
    function headerScript(){

        $(document).on('click', function(e){
            if($(e.target).is('.sendwich') || $(e.target).parents('.sendwich').length != 0){
                if(!$('.sendwich').is('.active')){
                    $('.sendwich').addClass('active');
                    $('.header-nav').addClass('active');
                }
                else{
                    $('.sendwich').removeClass('active');
                    $('.header-nav').removeClass('active');
                }
            }
            else if(!$(e.target).is('.sendwich') && $(e.target).parents('.sendwich').length == 0 && !$(e.target).is('.header-nav') && $(e.target).parents('.header-nav').length == 0){
                $('.sendwich').removeClass('active');
                $('.header-nav').removeClass('active');
            }
        });

        $(window).resize(function(){
            if($(window).width() > 1360){
                $('.sendwich').removeClass('active');
                $('.header-nav').removeClass('active');
            }
        });

    }
    // /header script

    // share slider

    function shareSlider(){

        if($('.slider-main').length != 0){
            $('.slider-main').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                dots:false
            });
        }

        $(document).on('click','.top-block .slider-button',function(){
            var parent = $(this).parents('.top-block-exlusive');
            if($(this).is('.button-prev')){
                parent.find('.slick-prev').click();
            }else if($(this).is('.button-next')){
                parent.find('.slick-next').click();
            }
        });

    }

    // /share slider

    $(document).ready(function(){

        headerScript();
        shareSlider();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}