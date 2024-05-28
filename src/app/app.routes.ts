import { Routes } from '@angular/router';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                /* component: ListComponent */
                loadComponent: () =>  import ('@products/pages/list/list.component')
                /* loadComponent: () =>  import ('@products/pages/list/list.component').then(m => m.ListComponent) */
                /* Dinamy imports */
            },
            {
                path: 'about',
                /* component: AboutComponent */
                loadComponent: () =>  import ('../app/domains/info/pages/about/about.component')
            },
            {
                path: 'product/:id_product',
                loadComponent: () =>  import ('@products/pages/product-detail/product-detail.component')
                /* component: ProductDetailComponent */
            }
        ]
    },    
    {
        path: '**',
        component: NotFoundComponent
    }
];
