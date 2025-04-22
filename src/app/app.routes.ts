import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

export const routes: Routes = [
    {
        path: '', // localhost
        //component: ExampleComponent
        // LAZY LOAD THE MODULE
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) //al crear este modulo debe de ser inicializado con routing
        //en versiones mas nuevas se prefiere cargar el componente directamente:
        //loadComponent: () => import('lazyComponent').then(c => c.LazyComponent)        
    }
];
