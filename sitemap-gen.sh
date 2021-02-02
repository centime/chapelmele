echo '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' > sitemap.xml

find src/html/pages -iname "*.html" | 
	sed -s "s/^src\/html\/pages/<sitemap><loc>/" | 
	sed -s "s/\.html$/\/<\/loc><lastmod>`date +'%Y-%m-%d'`<\/lastmod><\/sitemap>/" | 
	grep -v "/admin/" >> sitemap.xml

echo '</sitemapindex>' >> sitemap.xml