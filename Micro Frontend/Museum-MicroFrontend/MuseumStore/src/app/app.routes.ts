import { Routes } from '@angular/router';
import { Home } from './home/home';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },

  {
    path: 'mfe1',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4100/remoteEntry.js',

        exposedModule: './UserLoginModule',
      })
        .then((m) => m.UserLoginModule)
        .catch((err) => console.error(err));
    },
  },
  {
    path: 'mfe1',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4100/remoteEntry.js',

        exposedModule: './DashboardModule',
      })
        .then((m) => m.AdminDashboardModule)
        .catch((err) => console.error(err));
    },
  },
  {
    path: 'mfe2',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4500/remoteEntry.js',

        exposedModule: './ArticleCatalogueModule',
      })
        .then((m) => m.ArticleCatalogueModule)
        .catch((err) => console.error(err));
    },
  },
];
