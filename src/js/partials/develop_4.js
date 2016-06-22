try{
    jQuery.browser = {};
    jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

    function scrollMainPage(){

        function scroll(){
            var scroller='.index-main';
            var scrollPos = $(window).scrollTop(),
                indx = 0,
                sect = $('.index-main>section'),
                timer = 0;
            sect.eq(indx).addClass('active');
            var touchDetect = navigator.appVersion.indexOf("Mac")!=-1;

            if( scroller ){
                $('body').addClass('overflow-main');
            }
            if( window.location.hash =='#form' && indx != 7){
                sect.removeClass('active');
                indx = 7;
                $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                setTimeout(function(){
                    timer = 0;
                    sect.eq(indx).addClass('active');
                } ,400);
            }

            if( window.location.hash =='#services' && indx != 1){
                window.location.hash ='';
                sect.removeClass('active');
                indx = 1;
                $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                setTimeout(function(){
                    timer = 0;
                    sect.eq(indx).addClass('active');
                } ,400);
            }

            $(document).on('mousewheel DOMMouseScroll', function(event) {
                if( !jQuery.browser.mozilla ) {
                    window.location.hash='';
                    var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;

                    if( $(window).width() >= 1900 && $(window).height() > 750 && !touchDetect){
                        console.log(delta);
                        if( timer == 1 ){
                            event.preventDefault();
                            console.log('event.preventDefault();');
                        }else{
                            if( !$('.index-main').is('trans') ){
                                $('.index-main').addClass('trans');
                            }
                            if( delta < 0 && indx != (sect.length - 1) ){
                                console.log('delta < 0');
                                sect.removeClass('active');
                                event.preventDefault();
                                timer = 1;
                                indx++;
                                $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                                setTimeout(function(){
                                    timer = 0;
                                    sect.eq(indx).addClass('active');

                                    console.log('indx ' , indx);
                                } ,400);

                            }else if( delta > 0 && indx!=0 ){
                                sect.removeClass('active');
                                event.preventDefault();
                                timer = 1;
                                indx--;
                                $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                                setTimeout(function(){
                                    timer = 0;
                                    sect.eq(indx).addClass('active');
                                } ,400);
                            }
                        }
                    }
                }
            });

            if( touchDetect && device.desktop() || jQuery.browser.mozilla && device.desktop() ){
                if( $(window).width() >= 1900){
                    macScroll();
                }
            }
            $(window).resize(function(event) {
                if( touchDetect && device.desktop() || jQuery.browser.mozilla && device.desktop() ){
                    if( $(window).width() >= 1900){
                        macScroll();
                    }else{
                        indicator.turnOff();
                    }
                }
            });

            var indicator;

            function macScroll(){
                    $(window).scrollTop(0);

                    indicator = new WheelIndicator({
                    elem: document,
                    callback: function(e){
                        console.log(e.direction);
                        var delta = e.direction;

                        if( $(window).width() >= 1900 && $(window).height() ){
                            if( timer == 1 ){
                                //event.preventDefault();
                            }else{
                                if( !$('.index-main').is('trans') ){
                                    $('.index-main').addClass('trans');
                                }
                                if( delta == 'down' && indx != (sect.length - 1) ){
                                    sect.removeClass('active');
                                    //event.preventDefault();
                                    timer = 1;
                                    indx++;
                                    $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                                    setTimeout(function(){
                                        timer = 0;
                                        sect.eq(indx).addClass('active');
                                    } ,400);

                                }else if( delta == 'up' && indx != 0 ){
                                    sect.removeClass('active');
                                    //event.preventDefault();
                                    timer = 1;
                                    indx--;
                                    $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                                    setTimeout(function(){
                                        timer = 0;
                                        sect.eq(indx).addClass('active');
                                    } ,400);
                                }
                            }
                        }

                    }
                });
            }


            if( $(window).width() >= 1900 && $(window).height() > 750){

                $('.menu-item-72').click(function(e){
                    e.preventDefault();
                    sect.removeClass('active');
                    event.preventDefault();
                    timer = 1;
                    indx = 7;
                    $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                    setTimeout(function(){
                        timer = 0;
                        sect.eq(indx).addClass('active');
                        window.location.hash='#form';
                    } ,400);
                });
                $('.menu-item-70').click(function(e){
                    e.preventDefault();
                    sect.removeClass('active');
                    event.preventDefault();
                    timer = 1;
                    indx = 1;
                    $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                    setTimeout(function(){
                        timer = 0;
                        sect.eq(indx).addClass('active');
                        window.location.hash='#services';
                    } ,400);
                });
            }


            $('.index-main .btn,.index-main .button').on('click', function(event) {
                var count = 0;
                if($(window).width()<=641){
                    count = 174;
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
            document.documentElement.classList.remove('lock_body');
            setTimeout(function(){
                scrollMainPage();
            },100);

        };

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}