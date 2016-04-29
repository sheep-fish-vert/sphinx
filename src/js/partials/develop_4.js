try{
    function scrollMainPage(){

        function scroll(){

            var scroller='.index-main';
            var scrollPos = $(window).scrollTop(),
                indx = 0,
                sect = $('.index-main>section'),
                timer = 0;
            sect.eq(indx).addClass('active');
            var touchDetect = navigator.appVersion.indexOf("Mac")!=-1;
            $(document).unbind('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function(event) {
                var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;

                if( $(window).width() >= 1900 && $(window).height() > 750 && !touchDetect){
                    if( timer == 1 ){
                        event.preventDefault();
                    }else{
                        if( delta < 0 && indx != (sect.length - 1) ){
                            sect.removeClass('active');
                            event.preventDefault();
                            timer = 1;
                            indx++;
                            $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                            setTimeout(function(){
                                timer = 0;
                                sect.eq(indx).addClass('active');
                            } ,400)

                        }else if( delta > 0 && indx!=0 ){
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

            if( touchDetect && device.desktop() ){
                 var indicator = new WheelIndicator({
                    elem: document,
                    callback: function(e){
                        console.log(e.direction);
                        var delta = e.direction;
                        
                        if( $(window).width() >= 1900 && $(window).height() ){
                            if( timer == 1 ){
                                event.preventDefault();
                            }else{
                                if( delta == 'down' && indx != (sect.length - 1) ){
                                    sect.removeClass('active');
                                    event.preventDefault();
                                    timer = 1;
                                    indx++;
                                    $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                                    setTimeout(function(){
                                        timer = 0;
                                        sect.eq(indx).addClass('active');
                                    } ,400)

                                }else if( delta == 'up' && indx!=0 ){
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
   
                    }
                });           
                
            }



            $('.index-main .btn,.index-main .button').on('click', function(event) {
                var count = 0
                if($(window).width()<=641){
                    count = 174
                }
                if( $(window).width() >= 1900 && $(window).height() > 750){
                    sect.removeClass('active');
                    var lastSect = sect.length - 1;
                    $(scroller).css('top', "-"+sect.eq(lastSect).position().top+"px");
                    indx = sect.length - 1;
                    sect.eq(lastSect).addClass('active');
                }else{
                    event.preventDefault();
                    var contBottom = parseInt($('.index-contact-bottom').offset().top - count);
                    $('body,html').animate({scrollTop:contBottom},800);
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

    function checkBrowser(){
        if (bowser.msie) {
          $('body').addClass('its-fcking-ie');
        }
    }
    $(document).ready(function(){
        checkBrowser();
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