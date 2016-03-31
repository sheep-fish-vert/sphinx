try{
    function scrollMainPage(){
        jQuery.browser = {};
        jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

        var scroller='.index-main';

        function scroll(){
            jQuery.easing['jswing'] = jQuery.easing['swing'];
            jQuery.extend( jQuery.easing,
            {
                def: 'easeOutQuad',
                swing: function (x, t, b, c, d) {
                    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
                },
                easeInCubic: function (x, t, b, c, d) {
                    return c*(t/=d)*t*t + b;
                },
                easeOutCubic: function (x, t, b, c, d) {
                    return c*((t=t/d-1)*t*t + 1) + b;
                },
                easeInOutCubic: function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t + b;
                    return c/2*((t-=2)*t*t + 2) + b;
                }
            });

            var scrollPos = $(window).scrollTop(),
                indx = 0,
                sect = $('.index-main>section'),
                timer = 0;

            console.log('scrollPos ' , scrollPos +'||   indx ' , indx);

            // setTimeout(function(){
            //     sect.each(function(){
            //         var elemPos = $(this).offset().top;
            //         var elemCont = elemPos + $(this).outerHeight();

            //         console.log('elemPos ' , elemPos);
            //         if(elemCont >= scrollPos){
            //             console.log('elemCont >= scrollPos ' , elemCont >= scrollPos);
            //             $(this).addClass('active');
            //             $(scroller).animate({top:+"-"+elemPos}, 0);
            //             index = $('.index-main>section.active').index();
            //             return false;
            //         }
            //     });
            // },300);

            sect.eq(indx).addClass('active');


            $(window).on('mousewheel DOMMouseScroll', function(event) {

                if( timer == 1 ){
                    event.preventDefault();
                }else{
                    if( event.originalEvent.wheelDelta < 0 && indx != (sect.length - 1) ){
                        sect.removeClass('active');
                        console.log('scroll down'+'||   indx ' , indx);
                        event.preventDefault();
                        timer = 1;
                        indx++;

                        $(scroller).animate({
                            top:"-"+sect.eq(indx).position().top},
                            900,
                            'easeOutCubic',
                            function() {
                                timer = 0;
                                sect.eq(indx).addClass('active');
                        });
                    }else if( event.originalEvent.wheelDelta > 0 && indx!=0 ){
                        sect.removeClass('active');
                        console.log('scroll up'+'||     index ' , indx);
                        event.preventDefault();
                        timer = 1;
                        indx--;
                        $(scroller).animate({
                            top:"-"+sect.eq(indx).position().top},
                            900,
                            'easeOutCubic',
                            function() {
                                timer = 0;
                                sect.eq(indx).addClass('active');
                        });
                    }
                }
            });
        }



        if( $(window).width() >= 1900 && $(window).height() > 750){
            scroll();
        }
        $(window).resize(function(event) {
            if( $(window).width() >= 1900 && $(window).height() > 750){
                scroll();
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