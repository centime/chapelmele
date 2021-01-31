$(document).ready(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet',
                         'Août','Septembre','Octobre','Novembre','Décembre'],
            monthNamesShort:
            ['Janv.','Févr.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
            dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
            dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            titleFormat: {
                 month: 'MMMM yyyy', // ex : Janvier 2010
                 week: "d[ MMMM][ yyyy]{ - d MMMM yyyy}", // ex : 10 — 16 Janvier 2010, semaine à cheval : 28 Décembre 2009 - 3 Janvier 2010
                // todo : ajouter le numéro de la semaine
                 day: 'dddd d MMMM yyyy' // ex : Jeudi 14 Janvier 2010
            },
            columnFormat: {
                 month: 'ddd', // Ven.
                 week: 'ddd d', // Ven. 15
                day: '' // affichage déja complet au niveau du 'titleFormat'
            },
            axisFormat: 'H:mm', // la demande de ferdinand.amoi : 15:00 (pour 15, simplement supprimer le ':mm'
            timeFormat: {
                '': 'H:mm', // événements vue mensuelle.
                agenda: 'H:mm{ - H:mm}' // événements vue agenda
            },
            firstDay:1, // Lundi premier jour de la semaine
            buttonText: {
                prev:     '&nbsp;&#9668;&nbsp;',  // left triangle
                next:     '&nbsp;&#9658;&nbsp;',  // right triangle
                prevYear: '&nbsp;&lt;&lt;&nbsp;', // <<
                nextYear: '&nbsp;&gt;&gt;&nbsp;', // >>
                today:    'Aujourd\'hui',
                month:    'Mois',
                week:     'Semaine',
                day:      'Jour'
            },
            events: '/schedule/events.json'
        });
    });

