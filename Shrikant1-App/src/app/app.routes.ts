import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"",
        component:AppComponent,
        pathMatch:'full'
    },
    {
        path:"/checkout",
        component:CheckoutComponent
    },
];
