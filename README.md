Todos
=====

MVP requirements

* new urls checkup
* metas
* footer & contact
* sections text+img
* img uploads
* /actualites/ admin
* /agenda/ covid
* posts: festival, vide-dressing, four pizza, marché artisans
* sitemap.xml


Content
* new urls checkup
* sections text+img
* hero bgs
* "plan des chatelets"
* images cropping
* logos ?
* social widgets ?
* a/img alt/title
* OSM layer ?
* posts: festival, vide-dressing, four pizza, marché artisans


Responsive
* media queries breakpoints are 90% random for now, some cleaning to do
* h1 titles need finer re-sizing

Design
* some desktops get it tablet-looking, gotta find out why/how/fix
* prevent pics distorsion
* add parallax to .hera pics?
* anchor links height offset
* breadcrumbs
* https://github.com/michalsnik/aos ?

Agendas
* interactive events.json generator
* rich event description display
* prog/ateliers/dispos
* concerts/spectacles/expos/repas ?
* "besoin de bénévoles" ?
* private ?
* load #post first, then fullCalendar

Posts (actualites etc.)
* filterable categories (annonces, créas, évenements, résidences,..)
* galleries ?
* direct access by ID
	* meta updt (ld-json + og)

Gallery
* bxslider ?


Admin
* edits.json linebreaks (for commit diffs)
* bring actualites back
* current csv <-> json is beyond broken and nothing more than a quick PoC
* cache buster
* agenda(s)
* img uploads
* onpage preview & update ? localStorage fiddle/save then API commit/push ?
* UX validation confirm
* Edition mode localstorage for immediate perceived updated
* merge checkCredentials & fetchEdits ?

"Backend"
* sitemap.xml full urls
* sitemap.xml relevant lastmods
* RSS
* ld-json (+breadcrumbs)
* open graph
* redirect page & build

Clean up
* h2+br -> h2+h3
* br/ : check for spaces presence
* images compression
* lazy load bg url() (not heros)
* graceful degradation
* prefetch
* critical css
* minify
* fix #hero2 bullshit on homepage
* replace zepto ?
	https://github.com/franciscop/umbrella/blob/master/jquery.md

