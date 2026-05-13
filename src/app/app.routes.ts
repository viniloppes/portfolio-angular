import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Layout,
        children: [
            {
                path: '',
                component: HomePage
            },

        ]
    },
];
