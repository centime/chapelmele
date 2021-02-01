
echo "main.css..." &&
sed -si "s/url(\/static\//url(\/chapelmele\/static\//g" static/css/main.css
sed -si "s/url(\"\/static\//url(\"\/chapelmele\/static\//g" static/css/main.css
sed -si "s/url('\/static\//url('\/chapelmele\/static\//g" static/css/main.css
sed -si "s/'\/static\//'\/chapelmele\/static\//g" static/js/progCalendar.js
cd src/html &&
echo "home.html..." &&
cat head.html home.html foot.html | sed -s "s/href=\"\//href=\"\/chapelmele\//g" | sed -s "s/src=\"\//src=\"\/chapelmele\//g" > ../../index.html &&

cd pages &&

for FILE in `find . -iname "*.html"`; do 
  PAGE=`echo "$FILE" | sed -s "s/\.html$//"` &&
  echo "$FILE...";
  echo "-> ../../../$PAGE/index.html";
  mkdir -p "../../../$PAGE" &&
  cat ../head.html "$FILE" ../foot.html | sed -s "s/href=\"\//href=\"\/chapelmele\//g" | sed -s "s/src=\"\//src=\"\/chapelmele\//g" | sed -s "s/url(\/static\//url(\/chapelmele\/static\//g" > "../../../$PAGE/index.html"
done

