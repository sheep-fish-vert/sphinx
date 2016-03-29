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

    $(document).ready(function(){

        headerScript();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}