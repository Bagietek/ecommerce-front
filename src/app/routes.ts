import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ClientComponent } from './client/client.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
        path: 'shop',
        component: ShopComponent,
        title: 'shop',
    },
    {
        path: 'client',
        component: ClientComponent,
        title: 'client',
    },
    /*{
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },*/
  ];
  export default routeConfig;