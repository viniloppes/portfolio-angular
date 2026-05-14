import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomePage } from './pages/home-page/home-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ArticlesPage } from './pages/articles-page/articles-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: Layout,
        children: [

            {
                path: 'home',
                component: HomePage,
                pathMatch: 'full'
            },
            {
                path: 'projects',
                component: ProjectsPage
            },
            {
                path: 'articles',
                component: ArticlesPage
            },
            {
                path: 'contact',
                component: ContactPage
            }

        ]
    },
];
