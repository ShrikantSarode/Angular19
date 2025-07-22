const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    // "mfe1": "http://localhost:3000/remoteEntry.js",  
    "mfe1": "http://localhost:4300/remoteEntry.js",    
    "mfe2": "http://localhost:4400/remoteEntry.js",   
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
