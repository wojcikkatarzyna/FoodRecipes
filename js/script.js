$(document).ready(function(){

    const section = $('#calendar');
    const button = $('button');
    button.on('click', function(){

        let firstDate = '';
        let secondDate = '';
        const begin = $('#firstDate input');
        const end = $('#secondDate input');
        if (begin[0].value > 9999 || end[0].value > 9999) {
          alert('Sorry, value of year is incorrect.');
        } else if (begin[0].value > 2013 || end[0].value > 2013) {
          alert('Please, choose a different period of time. There is no data for perdiod after 2013. ');
        } else if (begin[1].value < 0 || end[1].value < 0 || begin[1].value > 12 || end[1].value > 12) {
          alert('Sorry, value of month is incorrect.');
        } else if (begin[2].value < 0 || end[2].value < 0 || begin[2].value > 31 || end[2].value > 31) {
          alert('Sorry, value of day is incorrect.');
        } else if (begin[1].value.split('').length < 2 || end[1].value.split('').length < 2) {
          alert('Please, add 0 before value of month');
        } else if (begin[2].value.split('').length < 2 || end[2].value.split('').length < 2) {
          alert('Please, add 0 before value of day');
        } else {
          for (let i=0; i<begin.length; i++) {
              firstDate += begin[i].value;
          }
          for (let i=0; i<end.length; i++) {
              secondDate += end[i].value;
          }
          let urlAPI = 'https://cors-anywhere.herokuapp.com/http://www.vizgr.org/historical-events/search.php?begin_date='+firstDate+'&end_date='+secondDate;
          console.log(urlAPI);
          loadFacts(urlAPI);
        }

    });

    function loadFacts(userURL) {
        $.ajax({
            url: userURL,
            method: 'GET'
        }).done(function(response){
            section.empty();
            console.log(response);
            if (response === 'No events found for this query.') {
                const noData = $('<div>', {class:'error'}).text('Sorry, no events for chosen dates. Try with another period of time.');
                section.append(noData);
            } else {
              $(response).find('event').each(function() {
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
            }
        }).fail(function(error){
              console.log(error);
        })
    }

})
