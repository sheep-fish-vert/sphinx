try{
    function scrollMainPage(){
        jQuery.browser = {};
        jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

        var scroller=jQuery.browser.webkit ? "body": "html";

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
            $(window).scrollTop(0);
            var scrollPos = $(window).scrollTop(),
                index = 0,
                sect = $('.index-main>section'),
                timer = 0;

            console.log('scrollPos ' , scrollPos +'||   index ' , index);

/*            setTimeout(function({

            }),200);*/

            $(window).on('mousewheel DOMMouseScroll', function(event) {

                if( timer == 1 ){
                    event.preventDefault();
                }else{
                    if( event.originalEvent.wheelDelta < 0 && index != (sect.length - 1) ){
                        console.log('scroll down'+'||   index ' , index);
                        event.preventDefault();
                        timer = 1;
                        index++;
                        $(scroller).animate({
                            scrollTop: sect.eq(index).offset().top},
                            900,
                            'easeOutCubic',
                            function() {
                                timer = 0;
                        });
                    }else if( event.originalEvent.wheelDelta > 0 && index!=0 ){
                        console.log('scroll up'+'||     index ' , index);
                        event.preventDefault();
                        timer = 1;
                        index--;
                        $(scroller).animate({
                            scrollTop: sect.eq(index).offset().top},
                            900,
                            'easeOutCubic',
                            function() {
                                timer = 0;
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
        scrollMainPage();
    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}