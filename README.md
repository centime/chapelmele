Todos
=====

Content
* obv. Lorem ipsums
* images compression
* images cropping
* a/img alt/title

Responsive
* media queries breakpoints are 100% random for now, some cleaning to do
* h1 titles need finer re-sizing

Design
* add parallax to .hera pics
* then fix #hero2 bullshit on homepage

Calendar
* interactive events.json generator
* rich event description display

Gallery
* bxslider ?

Build
* it's shitty, but it works
* every page get the same metas (title, description, canonical etc) for now, to be revised later
* gh-build is a dirty fix that won't be needed as soon as there's a proper domain name

Admin
* current csv <-> json is beyond broken and nothing more than a quick PoC

"Backend"
* sitemap.xml
* RSS

Clean up
* remove jquery


Run dev
=======

    cd chapelemele
    ./dev.sh & ./bdev.sh &>/dev/null & ./dev.sh

Should be running on localhost:8000, with src/sass and src/html being built continuously

DO NOT edit css files directly, or html outside of /src/