import { Routes } from '@angular/router';
import { Main } from './includes/main/main';
import { Button } from './includes/pages/button/button';
import { ToggleButton } from './includes/pages/toggle-button/toggle-button';
import { Badge } from './includes/pages/badge/badge';
import { BottomSheet } from './includes/pages/bottom-sheet/bottom-sheet';
import { Card } from './includes/pages/card/card';
import { Chips } from './includes/pages/chips/chips';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Main },
  { path: 'button', component: Button },
  { path: 'toggle-button', component: ToggleButton },
  { path: 'Badge', component: Badge },
  { path: 'bottom-sheet', component: BottomSheet },
  {path:'card',component:Card},
  {path:'chips',component:Chips}
];
