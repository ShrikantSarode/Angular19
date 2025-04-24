import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const routes: Routes = [
    {

        path: '',
        redirectTo: 'AppComponent',
        pathMatch: 'full'


    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    }, {
        path: 'checkout',
        component: CheckoutComponent
    }, {
        path: 'productDetails',
        component: ProductDetailsComponent
    }
];
