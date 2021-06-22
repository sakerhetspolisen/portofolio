const withOptimizedImages = require('next-optimized-images');
 
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  images: {
    domains: ['images.pexels.com'],
  },
  // your config for other plugins or the general next.js here...
});