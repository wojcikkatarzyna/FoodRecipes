$(document).ready(function(){

    function loadFacts() {
        $.ajax({
            url: 'http://www.vizgr.org/historical-events/search.php?begin_date=20010911&end_date=20010918',
            method: 'GET'
        }).done(function(response){
            console.log(response);
            $(response).find('event').each(function() {
                const section = $('#callendar');
                const date = $(this).find("date").text().split('/');
                const year = $('<div>', {class:'year'}).text(date[0]);
                const month = $('<div>', {class:'month'});
                switch (date[1]) {
                    case '01': {
                        month.text('JANUARY');
                        break;
                    }
                    case '02': {
                        month.text('FEBRUARY');
                        break;
                    }
                    case '03': {
                        month.text('MARCH');
                        break;
                    }
                    case '04': {
                        month.text('APRIL');
                        break;
                    }
                    case '05': {
                        month.text('MAY');
                        break;
                    }
                    case '06': {
                        month.text('JUNE');
                        break;
                    }
                    case '07': {
                        month.text('JULY');
                        break;
                    }
                    case '08': {
                        month.text('AUGUST');
                        break;
                    }
                    case '09': {
                        month.text('SEPTEMBER');
                        break;
                    }
                    case '10': {
                        month.text('OCTOBER');
                        break;
                    }
                    case '11': {
                        month.text('NOVEMBER');
                        break;
                    }
                    case '12': {
                        month.text('DECEMBER');
                        break;
                    }
                }
                const day = $('<div>', {class:'day'}).text(date[2]);
                const description = $(this).find("description").text();
                const eventDiv = $('<div>', {class:'event'});
                const dateDiv = $('<div>', {class:'date'});
                const infoDiv = $('<div>', {class:'description'});
                dateDiv.append(year);
                dateDiv.append(day);
                dateDiv.append(month);
                infoDiv.text(description);
                eventDiv.append(dateDiv);
                eventDiv.append(infoDiv);
                section.append(eventDiv);
            });
        }).fail(function(error){
            console.log(error);
        })
    }
    loadFacts();



})
