try{
    function scrollMainPage(){

        function scroll(){

            var scroller='.index-main';
            var scrollPos = $(window).scrollTop(),
                indx = 0,
                sect = $('.index-main>section'),
                timer = 0;

            console.log('scrollPos ' , scrollPos +'||   indx ' , indx);

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
                        $(scroller).css('top', "-"+sect.eq(indx).position().top+"px");
                        setTimeout(function(){
                            timer = 0;
                            sect.eq(indx).addClass('active');
                        } ,400)

                    }else if( event.originalEvent.wheelDelta > 0 && indx!=0 ){
                        sect.removeClass('active');
                        console.log('scroll up'+'||     index ' , indx);
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