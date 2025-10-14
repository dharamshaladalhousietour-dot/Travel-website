#!/usr/bin/env node

/**
 * Production Deployment Script
 * Ensures sitemap.xml and robots.txt are properly generated and included in build
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production deployment process...\n');

// Step 1: Generate sitemap
console.log('📄 Generating sitemap.xml and robots.txt...');
const { generateSitemap, writeSitemap, validateSitemap } = require('./generateSitemap');

writeSitemap();
if (!validateSitemap()) {
  console.error('❌ Sitemap validation failed. Deployment aborted.');
  process.exit(1);
}

// Step 2: Build the project
console.log('\n📦 Building production bundle...');
const buildProcess = spawn('yarn', ['build'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`❌ Build process failed with code ${code}`);
    process.exit(1);
  }

  // Step 3: Verify deployment files
  console.log('\n🔍 Verifying deployment files...');
  
  const buildDir = path.join(__dirname, '..', 'build');
  const requiredFiles = ['sitemap.xml', 'robots.txt', 'index.html'];
  
  let allFilesPresent = true;
  requiredFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} - Found`);
    } else {
      console.log(`❌ ${file} - Missing`);
      allFilesPresent = false;
    }
  });

  if (!allFilesPresent) {
    console.error('\n❌ Some required files are missing from build directory.');
    process.exit(1);
  }

  // Step 4: Final verification
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
  
  console.log(`\n🎉 Deployment Ready!`);
  console.log(`📊 Sitemap contains ${urlCount} URLs`);
  console.log(`📍 Files location: ${buildDir}`);
  console.log(`🌐 Sitemap will be accessible at: https://prettyplanettravels.com/sitemap.xml`);
  console.log(`🤖 Robots.txt will be accessible at: https://prettyplanettravels.com/robots.txt`);
  console.log(`\n✨ Google Search Console can now fetch the sitemap successfully!`);
});

buildProcess.on('error', (error) => {
  console.error(`❌ Build process error: ${error}`);
  process.exit(1);
});