const fs = require('fs');
const path = require('path');

// Base URL for the website
const BASE_URL = 'https://prettyplanettravels.com';

// Define all the static routes
const staticRoutes = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/tour-packages',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/events-weddings',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/terms-conditions',
    priority: '0.3',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/refund-policy',
    priority: '0.3',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/travel-insurance',
    priority: '0.3',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Tour package slugs (dynamic routes)
const tourPackageSlugs = [
  'kashmir-honeymoon-special-5n6d',
  'manali-romantic-4n5d',
  'shimla-kullu-manali-6n7d',
  'dharamshala-dalhousie-5n6d',
  'golden-triangle-delhi-agra-jaipur-5n6d',
  'rajasthan-royal-heritage-7n8d',
  'kerala-backwaters-munnar-5n6d',
  'goa-beach-paradise-4n5d',
  'uttarakhand-char-dham-yatra-9n10d',
  'ladakh-adventure-6n7d',
  'andaman-island-escape-5n6d',
  'himachal-complete-tour-8n9d',
  'kashmir-complete-srinagar-gulmarg-pahalgam-6n7d',
  'manali-solang-rohtang-adventure-4n5d',
  'shimla-kufri-chail-heritage-5n6d',
  'spiti-valley-adventure-7n8d',
  'kinnaur-kailash-spiritual-6n7d',
  'mcleodganj-dharamshala-spiritual-3n4d',
  'dalhousie-khajjiar-nature-4n5d',
  'kangra-valley-tea-gardens-3n4d',
  'bir-billing-paragliding-3n4d',
  'kasol-tosh-malana-3n4d',
  'manali-kasol-kheerganga-5n6d',
  'triund-trek-2n3d',
  'hampta-pass-trek-4n5d',
  'kheerganga-trek-3n4d',
  'beas-kund-trek-3n4d',
  'chandratal-lake-4n5d',
  'pin-parvati-trek-7n8d',
  'malana-village-trek-2n3d',
  'thailand-bangkok-phuket-6n7d',
  'dubai-abu-dhabi-luxury-5n6d',
  'singapore-malaysia-6n7d',
  'maldives-luxury-resort-4n5d',
  'bali-indonesia-cultural-6n7d',
  'nepal-kathmandu-pokhara-5n6d',
  'bhutan-thimphu-paro-4n5d',
  'sri-lanka-cultural-6n7d',
  'vietnam-cambodia-7n8d',
  'europe-multi-country-12n13d',
  'australia-new-zealand-14n15d',
  'usa-east-coast-10n11d',
  'canada-rocky-mountains-9n10d',
  'japan-cultural-tour-8n9d',
  'south-korea-seoul-busan-6n7d',
  'china-beijing-shanghai-7n8d',
  'turkey-istanbul-cappadocia-7n8d',
  'egypt-cairo-luxor-6n7d',
  'morocco-imperial-cities-7n8d',
  'south-africa-cape-town-safari-8n9d'
];

// Generate dynamic tour package routes
const tourPackageRoutes = tourPackageSlugs.map(slug => ({
  url: `/package/${slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: new Date().toISOString().split('T')[0]
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...tourPackageRoutes];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated successfully with ${allRoutes.length} URLs`);
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`🌐 Accessible at: ${BASE_URL}/sitemap.xml`);
  
  // Also log the breakdown
  const staticCount = staticRoutes.length;
  const dynamicCount = tourPackageRoutes.length;
  console.log(`📊 Breakdown: ${staticCount} static pages, ${dynamicCount} tour packages`);
  console.log(`🔍 SEO Features: Priority levels, Change frequency, Last modified dates`);
}

// Validate sitemap structure
function validateSitemap() {
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ Sitemap not found');
    return false;
  }
  
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const hasXMLDeclaration = content.includes('<?xml version="1.0" encoding="UTF-8"?>');
  const hasUrlset = content.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  const hasUrls = content.includes('<loc>');
  
  if (hasXMLDeclaration && hasUrlset && hasUrls) {
    console.log('✅ Sitemap validation passed - Structure is correct');
    return true;
  } else {
    console.log('❌ Sitemap validation failed - Structure issues detected');
    return false;
  }
}

// Run the sitemap generation
writeSitemap();
validateSitemap();

module.exports = { generateSitemap, writeSitemap, validateSitemap };