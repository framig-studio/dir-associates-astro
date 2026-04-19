#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// SEO Checklist
const seoChecks = {
  'HTML Language': (content) => {
    const langMatch = content.match(/<html[^>]+lang="([^"]+)"/);
    return langMatch ? `✅ lang="${langMatch[1]}"` : '❌ No lang attribute';
  },
  
  'Title Tag': (content) => {
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    return titleMatch ? `✅ "${titleMatch[1].substring(0, 50)}..."` : '❌ No title tag';
  },
  
  'Meta Description': (content) => {
    const descMatch = content.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/);
    return descMatch ? `✅ "${descMatch[1].substring(0, 50)}..."` : '❌ No meta description';
  },
  
  'Meta Keywords': (content) => {
    const keywordsMatch = content.match(/<meta[^>]+name="keywords"[^>]+content="([^"]+)"/);
    return keywordsMatch ? `✅ Found keywords` : '⚠️ No meta keywords (optional)';
  },
  
  'Structured Data': (content) => {
    const jsonLdMatch = content.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    return jsonLdMatch ? '✅ JSON-LD structured data found' : '⚠️ No structured data';
  },
  
  'Viewport Meta': (content) => {
    const viewportMatch = content.match(/<meta[^>]+name="viewport"/);
    return viewportMatch ? '✅ Viewport meta tag found' : '❌ No viewport meta tag';
  },
  
  'Canonical URL': (content) => {
    const canonicalMatch = content.match(/<link[^>]+rel="canonical"/);
    return canonicalMatch ? '✅ Canonical URL found' : '⚠️ No canonical URL';
  }
};

function checkSEO(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\n📄 Checking: ${path.basename(filePath)}`);
    console.log('='.repeat(50));
    
    Object.entries(seoChecks).forEach(([check, test]) => {
      console.log(`${check}: ${test(content)}`);
    });
    
    return true;
  } catch (error) {
    console.log(`❌ Error reading ${filePath}: ${error.message}`);
    return false;
  }
}

// Check main files
const filesToCheck = [
  'dist/index.html',
  'dist/blog/index.html'
];

console.log('🔍 SEO Analysis Tool');
console.log('====================');

filesToCheck.forEach(file => {
  if (fs.existsSync(file)) {
    checkSEO(file);
  } else {
    console.log(`\n⚠️  ${file} not found. Run 'npm run build' first.`);
  }
});

console.log('\n💡 Tips:');
console.log('- Run "npm run build" to generate HTML files');
console.log('- Check dist/ folder for generated files');
console.log('- Use Google Search Console for live testing');
