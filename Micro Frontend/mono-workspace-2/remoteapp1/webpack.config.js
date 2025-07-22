const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remoteapp1',

  exposes: {
    // './Component': './src\app\app.ts',
    //  './Component': './src/app/order/order.ts',
    './Module': './src/app/order/order-module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
