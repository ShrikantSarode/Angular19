const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'ArticlesCatalogue',

  exposes: {
    './ArticleCatalogueModule': './src/app/article-catalogue/article-catalogue-module.ts',
    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
