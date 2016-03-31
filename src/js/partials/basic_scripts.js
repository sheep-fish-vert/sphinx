jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var scroller=jQuery.browser.webkit ? "body": "html";

$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));

    if ( $(window).width() > 640 ){
        $('.main-one-height').each(function() {
            var that = $(this).find('.item-col-text');
            oneHeight(that);
        });
    }else{
        $('.main-one-height .item-col-text').removeAttr('style');
    }
}

/*GO TO href*/
function goTo(){
    $('.header-menu a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $(scroller).animate({scrollTop:target},500);
    });
}

// cut text script

function cutText(){
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function(){
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if(text.length > value && value > 0){
            var newText = text.substring(0,value) + filler;
            $(this).text(newText);
        }
    });
};

/*header buter*/
function headeButer(menuMobile,toggleMenu){
    if(menuMobile){
        menuMobile.click(function(event) {
            if($(window).width()<1024-$.scrollbarWidth()){
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart',function (event){
            if($(window).width()<1024-$.scrollbarWidth()){
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
                    {
                        toggleMenu.slideUp();
                        menuMobile.removeClass('active');
                    }
            }
        });
    }
}

function changeViewport(){

    $(window).resize(function(){

        whatViewport();

    });

    function whatViewport(){

        var windowWidth = screen.width;
        var viewport = $("meta[name=viewport]");
        viewport.attr('content', 'width=device-width');
        if(windowWidth<=640){
            viewport.attr('content', 'width=640');
        }

    };

}

/* DOCUMENT READY  */
$(document).ready(function() {
    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());
});

$(window).resize(function() {
    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());
});

$(window).load(function(){

    changeViewport();

});