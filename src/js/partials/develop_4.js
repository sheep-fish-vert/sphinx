try{
    function scrollMainPage(){

        function scroll(){

            var scroller='.index-main';
            var scrollPos = $(window).scrollTop(),
                indx = 0,
                sect = $('.index-main>section'),
                timer = 0;
            sect.eq(indx).addClass('active');

            $(window).on('mousewheel DOMMouseScroll', function(event) {
                if( $(window).width() >= 1900 && $(window).height() > 750){
                    if( timer == 1 ){
                        event.preventDefault();
                    }else{
                        if( event.originalEvent.wheelDelta < 0 && indx != (sect.length - 1) ){
                            sect.removeClass('active');
                            event.preventDefault();
                            timer = 1;
                            indx++;
                            $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                            setTimeout(function(){
                                timer = 0;
                                sect.eq(indx).addClass('active');
                            } ,400)

                        }else if( event.originalEvent.wheelDelta > 0 && indx!=0 ){
                            sect.removeClass('active');

                            event.preventDefault();
                            timer = 1;
                            indx--;
                            $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                            setTimeout(function(){
                                timer = 0;
                                sect.eq(indx).addClass('active');
                            } ,400)
                        }
                    }
                }
            });

            $('.index-main .btn').on('click', function(event) {
                if( $(window).width() >= 1900 && $(window).height() > 750){
                    sect.removeClass('active');
                    var lastSect = sect.length - 1;
                    $(scroller).css('top', "-"+sect.eq(lastSect).position().top+"px");
                    indx = sect.length - 1;
                    sect.eq(lastSect).addClass('active');
                }else{
                    event.preventDefault();
                    $('body,html').animate({scrollTop:$('.index-contact-bottom').offset().top},800);
                    return false;
                }
            });
        }
        scroll();
        $(window).resize(function(event) {
            scroll();
            if( $(window).width() < 1900 && $(window).height() > 750){
                $('.index-main').removeAttr('style');
                $('.index-main>section').removeClass('active');
            }
        });
    }

    $(document).ready(function(){

    });

    $(window).load(function(){
        if ( $('.index-main').length ) {
            scrollMainPage();
        }

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}