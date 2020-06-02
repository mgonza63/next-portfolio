const sitemap = require('nextjs-sitemap-generator'); 

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
sitemap({  
  baseUrl: 'https://www.gosifymedia.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});