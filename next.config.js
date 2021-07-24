const withOptimizedImages = require('next-optimized-images');
 
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  },
});