import { Routes } from '@angular/router';

import {ListComponent} from '../app/domains/products/pages/list/list.component'
import { AboutComponent } from '../app/domains/info/pages/about/about.component';
export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
];
