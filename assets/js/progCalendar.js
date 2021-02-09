
function displayAnchoredEvent(){
	// todo: history.pushState ?
	// todo: update metas for direct linking
	$('.event-desc').hide(); 
	var target = location.hash;
	var $evs = $('.fc-event');
	$evs.find('[event-id="'+target+'"]').show(); 
}

function init(){
	var $calendar = $('#calendar')[0];
	// todo: fix: global for dev purposes only
    calendar = new FullCalendar.Calendar($calendar, {
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
		var events = await $.get('/assets/js/test.json');
		calendar.addEventSource(events);
		displayAnchoredEvent();
		window.onhashchange = displayAnchoredEvent;
	}
    update(calendar);
}

$(document).ready(init);