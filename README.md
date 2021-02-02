Todos
=====

Content
* obv. Lorem ipsums
* logos ?
* images cropping
* social widgets ?
* meta titles/desc

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


Gallery
* bxslider ?

Build
* it's shitty, but it works
* every page get the same metas (title, description, canonical etc) for now, to be revised later
* gh-build is a dirty fix that won't be needed as soon as there's a proper domain name

Admin
* current csv <-> json is beyond broken and nothing more than a quick PoC
* cache buster
* agenda(s)

"Backend"
* sitemap.xml full urls
* sitemap.xml relevant lastmods
* RSS
* ld-json
* open graph
* robots.txt

Clean up
* images compression
* lazy load
* a/img alt/title
* graceful degradation
* prefetch
* critical css
* fix #hero2 bullshit on homepage
* remove jquery


Run dev
=======

    cd chapelmele
    ./dev.sh & ./bdev.sh &>/dev/null & ./dev.sh

Should be running on localhost:8000, with src/sass and src/html being built continuously

DO NOT edit css files directly, or html outside of /src/