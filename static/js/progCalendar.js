
function displayAnchorEvent(){
	$('.event-desc').hide(); 
	var target = location.hash;
	var $evs = $('.fc-event');
	$evs.find('[event-id="'+target+'"]').show(); 
}

function init(){
	var calendarEl = $('#calendar')[0];
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'fr',
	  eventDidMount: function(ev) {
        console.log(ev.el);
        console.log(ev.event.extendedProps.description);
        $(ev.el).append('<div class="event-desc" event-id="'+ev.event.url+'" style="display:none">'+ev.event.extendedProps.description+'</div>');
      }
    });
    calendar.render();

    async function update(calendar){
		var events = await $.get('/static/js/test.json');
		calendar.addEventSource(events);
		displayAnchorEvent();
		window.onhashchange = displayAnchorEvent;
	}
    update(calendar);
}

$(document).ready(init);