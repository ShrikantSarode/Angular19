const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "UserLogin",

  exposes: {
    "./UserLoginModule": "./src/app/user-login/user-login-module.ts",
    "./DashboardModule": "./src/app/admin-dashboard/admin-dashboard-module.ts",
    "./ManageUsersModule": "./src/app/manage-user/manage-user-module.ts",
    "./UserOrdersModule": "./src/app/user-orders/user-orders-module.ts",
    "./UpdateUserModule": "./src/app/update-user/update-user-module.ts",
    "./ManageArticlesModule": "./src/app/manage-articles/manage-articles-module.ts",
    "./AddArticlesModule": "./src/app/add-articles/add-articles-module.ts",
    "./UpdateArticlesModule": "./src/app/update-articles/update-articles-module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
