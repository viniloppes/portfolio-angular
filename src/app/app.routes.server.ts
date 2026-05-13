import { RenderMode, ServerRoute } from '@angular/ssr';
import { Layout } from './layout/layout';

export const serverRoutes: ServerRoute[] = [

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
