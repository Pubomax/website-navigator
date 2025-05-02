import { Router } from 'express';
import { getPageTitleData } from '../client/src/lib/page-titles';
import { XMLBuilder } from 'fast-xml-parser';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  'xhtml:link'?: {
    '@_rel': 'alternate';
    '@_hreflang': string;
    '@_href': string;
  }[];
}

export function setupSitemap() {
  const router = Router();
  
  router.get('/sitemap.xml', (req, res) => {
    // Generate URLs for all pages in both languages
    const urls: SitemapUrl[] = [];
    const baseUrl = 'https://minecoregroup.com';
    const today = new Date().toISOString().split('T')[0];
    
    // Define all pages to include in sitemap
    const pages = [
      { path: '/', key: 'home', priority: 1.0, changefreq: 'weekly' as const },
      { path: '/about', key: 'about', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/about/story', key: 'story', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/about/mission', key: 'mission', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/about/team', key: 'team', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/careers', key: 'careers', priority: 0.7, changefreq: 'weekly' as const },
      { path: '/services', key: 'services', priority: 0.9, changefreq: 'monthly' as const },
      { path: '/solutions', key: 'solutions', priority: 0.9, changefreq: 'monthly' as const },
      { path: '/consultation', key: 'consultation', priority: 0.9, changefreq: 'monthly' as const },
      { path: '/contact', key: 'contact', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/faq', key: 'faq', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/blog', key: 'blog', priority: 0.7, changefreq: 'weekly' as const },
      { path: '/case-studies', key: 'caseStudies', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/privacy', key: 'privacy', priority: 0.4, changefreq: 'yearly' as const },
      { path: '/terms', key: 'terms', priority: 0.4, changefreq: 'yearly' as const },
      
      // Plans
      { path: '/plans/velocity', key: 'velocity', priority: 0.9, changefreq: 'monthly' as const },
      { path: '/plans/accelerate', key: 'accelerate', priority: 0.9, changefreq: 'monthly' as const },
      { path: '/plans/dominate', key: 'dominate', priority: 0.9, changefreq: 'monthly' as const },
      
      // Services
      { path: '/services/digital-foundation', key: 'digitalFoundation', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/transformation-consulting', key: 'transformationConsulting', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/ai-automation-starter', key: 'aiAutomationStarter', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/custom-ai-automation', key: 'customAiAutomation', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/custom-software', key: 'customSoftware', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/intelligent-support', key: 'intelligentSupport', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/sales-automation', key: 'salesAutomation', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/services/marketing-automation', key: 'marketingAutomation', priority: 0.8, changefreq: 'monthly' as const },
      
      // Solutions
      { path: '/solutions/automated-lead-generation', key: 'automatedLeadGeneration', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/solutions/smart-nurturing', key: 'smartNurturing', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/solutions/instant-customer-engagement', key: 'instantCustomerEngagement', priority: 0.8, changefreq: 'monthly' as const },
      { path: '/solutions/quick-acquisition', key: 'quickAcquisition', priority: 0.8, changefreq: 'monthly' as const },
      
      // Industries/Sectors
      { path: '/sectors/manufacturing', key: 'manufacturing', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/sectors/finance', key: 'finance', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/sectors/retail', key: 'retail', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/sectors/healthcare', key: 'healthcare', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/sectors/public-sector', key: 'publicSector', priority: 0.7, changefreq: 'monthly' as const },
      
      // Business Size
      { path: '/business-types/micro', key: 'micro', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/business-types/mid-sized', key: 'midSized', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/business-types/large', key: 'large', priority: 0.7, changefreq: 'monthly' as const },
      
      // Regions
      { path: '/regions/ontario', key: 'ontario', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/regions/british-columbia', key: 'britishColumbia', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/regions/alberta', key: 'alberta', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/regions/quebec', key: 'quebec', priority: 0.8, changefreq: 'monthly' as const },
    ];
    
    // Add URLs for both English and French versions
    pages.forEach(page => {
      // Get page data for both languages from the same function used in the UI
      const enTitle = getPageTitleData(page.key as any, false).title;
      const frTitle = getPageTitleData(page.key as any, true).title;
      
      // English URL
      const enUrl: SitemapUrl = {
        loc: `${baseUrl}${page.path}`,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
        'xhtml:link': [
          {
            '@_rel': 'alternate',
            '@_hreflang': 'en',
            '@_href': `${baseUrl}${page.path}`
          },
          {
            '@_rel': 'alternate',
            '@_hreflang': 'fr',
            '@_href': `${baseUrl}/fr${page.path}`
          }
        ]
      };
      
      // French URL
      const frUrl: SitemapUrl = {
        loc: `${baseUrl}/fr${page.path}`,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
        'xhtml:link': [
          {
            '@_rel': 'alternate',
            '@_hreflang': 'en',
            '@_href': `${baseUrl}${page.path}`
          },
          {
            '@_rel': 'alternate',
            '@_hreflang': 'fr',
            '@_href': `${baseUrl}/fr${page.path}`
          }
        ]
      };
      
      urls.push(enUrl, frUrl);
    });
    
    // Build XML
    const builder = new XMLBuilder({
      format: true,
      ignoreAttributes: false,
      processEntities: false,
      attributeNamePrefix: '@_'
    });
    
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' + 
      builder.build({
        'urlset': {
          '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
          '@_xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
          'url': urls
        }
      });
    
    // Send XML response
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
  
  return router;
}