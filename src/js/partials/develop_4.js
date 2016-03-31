try{
    function scrollMainPage(){
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
                index = null,
                timer = 0;

            console.log('scrollPos ' , scrollPos);

            $(window).on('mousewheel DOMMouseScroll', function(event) {

                if( timer == 1 ){
                    event.preventDefault();
                }else{
                    if( event.originalEvent.wheelDelta < 0){
                        console.log('scroll down');
                    }else if( event.originalEvent.wheelDelta > 0 ){
                        console.log('scroll up');
                    }
                }
            });
        }



        if( $(window).width() >= 1919 && $(window).height() > 750){
            scroll();
        }
        $(window).resize(function(event) {
            if( $(window).width() >= 1919 && $(window).height() > 750){
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