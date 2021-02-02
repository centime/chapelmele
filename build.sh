
cd src/html &&
echo "home.html..." &&
cat head-top.html home.meta head-bottom.html home.html foot.html > ../../index.html &&

BASEDIR=`pwd`
cd pages &&

for FILE in `find . -iname "*.html"`; do 
  PAGE=`echo "$FILE" | sed -s "s/\.html$//"` &&
  if [ -f "$PAGE.meta" ]; then
    echo "$PAGE.meta exists."
    META="$PAGE.meta"
  else 
    echo "$PAGE.meta does not exist."
    META="$BASEDIR/default.meta"
  fi
  echo "$FILE...";
  echo "-> ../../../$PAGE/index.html";
  mkdir -p "../../../$PAGE" &&
  cat ../head-top.html "$META" ../head-bottom.html "$FILE" ../foot.html> "../../../$PAGE/index.html"
  echo "---"
done