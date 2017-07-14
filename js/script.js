$(document).ready(function(){

    function loadFacts() {
        $.ajax({
            url: 'http://www.vizgr.org/historical-events/search.php?begin_date=20010911&end_date=20010912',
            method: 'GET'
        }).done(function(response){
            console.log(response);
            $(response).find('event').each(function() {
                var section = $('#historicalFacts');
                var date = $(this).find("date").text();
                var description = $(this).find("description").text();
                var eventDiv = $('<div>', {class:'event'});
                var dateDiv = $('<div>', {class:'date'});
                var infoDiv = $('<div>', {class:'description'});
                dateDiv.text(date);
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
