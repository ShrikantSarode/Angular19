const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'UserLogin',

  exposes: {
    './UserLoginModule': './src/app/user-login/user-login-module.ts',
    './DashboardModule': './src/app/admin-dashboard/admin-dashboard-module.ts',
    './ManageUsersModule': './src/app/manage-user/manage-user-module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
