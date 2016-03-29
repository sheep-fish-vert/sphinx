try {

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
        
        

        $('input#datepicker').on('change', function() { $('.selectdate').css('display', 'none'); });
    });

    $(window).load(function() {

    });

    $(window).resize(function() {

    });

}
catch (e) {

    console.log('develop_2.js \n Error! ' + e.name + ':' + e.message + '\n' + e.stack);

}