Todos
=====

Content
* obv. Lorem ipsums
* images cropping
* favicon
* logos ?
* social widgets ?
* a/img alt/title
* OSM layer
* posts: festival, vide-dressing, four pizza, marché artisans

Urls
* residences-artistiques > residences-artistiques-en-normandie

Responsive
* media queries breakpoints are 100% random for now, some cleaning to do
* h1 titles need finer re-sizing

Design
* prevent pics distorsion
* add parallax to .hera pics?

Agendas
* interactive events.json generator
* rich event description display
* prog/ateliers/dispos
* concerts/spectacles/expos/repas ?
* besoin de bénévoles ?
* private ?
* load #post first, then fullCalendar

Posts (actualites etc.)
* filterable categories (annonces, créas, évenements, résidences,..)
* galleries ?
* direct access by ID
	* meta updt (ld-json + og)

Gallery
* bxslider ?

Build
* it's shitty, but it works

Admin
* current csv <-> json is beyond broken and nothing more than a quick PoC
* cache buster
* agenda(s)
* update via API (https://stackoverflow.com/questions/23971481/post-to-github-v3-api-using-ajax-and-javascript-fails-with-a-http-404/23974430#23974430)
* onpage preview & update ? localStorage fiddle/save then API commit/push ?

"Backend"
* sitemap.xml full urls
* sitemap.xml relevant lastmods
* RSS
* ld-json
* open graph

Clean up
* br/ : check for spaces presence
* images compression
* lazy load bg url()
* graceful degradation
* prefetch
* critical css
* fix #hero2 bullshit on homepage
* remove jquery
	https://github.com/franciscop/umbrella/blob/master/jquery.md


Run dev
=======

    cd chapelmele
    ./dev.sh & ./bdev.sh &>/dev/null & ./dev.sh

Should be running on localhost:8000, with src/sass and src/html being built continuously

DO NOT edit css files directly, or html outside of /src/