/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://leaderinfo.ru',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/thank-you'],
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Yandex',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    const highPriority = ['/', '/products', '/solutions', '/pricing', '/contact'];
    const mediumPriority = ['/about', '/case-studies'];

    let priority = config.priority;
    if (highPriority.includes(path)) {
      priority = 1.0;
    } else if (mediumPriority.includes(path)) {
      priority = 0.8;
    } else if (path.startsWith('/products/') || path.startsWith('/solutions/')) {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
