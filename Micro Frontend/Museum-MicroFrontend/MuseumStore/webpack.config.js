const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    // UserLogin
    "mfe1": "http://localhost:4100/remoteEntry.js",   
    // articlesCatalog
    "mfe2": "http://localhost:4500/remoteEntry.js", 
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
