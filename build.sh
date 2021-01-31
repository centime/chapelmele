
cd src/html &&
echo "home.html..." &&
cat head.html home.html foot.html > ../../index.html &&

cd pages &&

for FILE in *.html; do 
  PAGE=`echo "$FILE" | sed -s "s/\.html$//"` &&
  echo "$FILE...";
  echo "-> ../../../$PAGE/index.html";
  mkdir -p "../../../$PAGE" &&
  cat ../head.html "$FILE" ../foot.html> "../../../$PAGE/index.html"
done