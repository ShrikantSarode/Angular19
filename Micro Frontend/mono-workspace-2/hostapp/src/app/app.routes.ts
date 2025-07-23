import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'mfe1',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',

        exposedModule: './Module',
      })
        .then((m) => m.OrderModule)
        .catch((err) => console.error(err));
    },
  },

  {
    path: 'mfe2',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4400/remoteEntry.js',

        exposedModule: './ListRoutingModule',
      })
        .then((m) => m.ListModule)
        .catch((err) => console.error(err));
    },
  },
];
