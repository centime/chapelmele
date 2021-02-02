echo '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' > sitemap.xml
echo "  <sitemap><loc>https://chapelmele.com</loc><lastmod>`date +'%Y-%m-%d'`</lastmod></sitemap>" >> sitemap.xml

find src/html/pages -iname "*.html" | 
	sed -s "s/^src\/html\/pages/  <sitemap><loc>https:\/\/chapelmele.com/" | 
	sed -s "s/\.html$/\/<\/loc><lastmod>`date +'%Y-%m-%d'`<\/lastmod><\/sitemap>/" | 
	grep -v "/admin/" >> sitemap.xml

echo '</sitemapindex>' >> sitemap.xml