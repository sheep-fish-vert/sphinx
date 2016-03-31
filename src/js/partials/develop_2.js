try {
    function googleMap(mapWrap){
        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX,cordY);
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                disableDefaultUI: false, //без управляющих елементов
                mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
                zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
                }
            }
            var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var contentString = '<div class="marker-test">'+googleText+'</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });


            /*маркер на svg*/
            var SQUARE_PIN = 'M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375  C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96  c53,0,96,43,96,96S309,256,256,256z'
            //больше - http://map-icons.com/
            /*/маркер на svg*/

            //var image = 'images/footer-contact-marker.png';   // иконка картинкой

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                //icon: image //  иконка картинкой
                icon: {                               //маркер на svg
                    path: SQUARE_PIN,
                    scale: 0.1,
                    fillColor: '#FF3232',
                    fillOpacity: 1,
                    strokeColor: '#FF3232',
                    strokeWeight: 1
                },
            });

            /*анимация при клике на маркер*/
            marker.addListener('click', toggleBounce);
            function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
            }
            /*/анимация при клике на маркер*/

            /*По клику открываеться инфоблок*/
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

        }
        initialize();
    }


    $(document).ready(function() {
        
        $("#datepicker").datepicker({
            minDate: 0,
            showOtherMonths: true,
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false
        });

        $("a.grouped_elements").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600, 
            'speedOut'		:	200, 
            'overlayShow'   :   false
        });
        

        $('input#datepicker').on('change', function() { $('.selectdate').css('display', 'none'); });

        if ($('#formap').length) {
            googleMap('formap');
        };
        

    });

    $(window).load(function() {

    });

    $(window).resize(function() {

    });

}
catch (e) {

    console.log('develop_2.js \n Error! ' + e.name + ':' + e.message + '\n' + e.stack);

}