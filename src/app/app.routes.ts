import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ArticulosComponent } from './articulos/articulos.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'empresas',
        component: EmpresasComponent
    },
    {
        path: 'articulos',
        component: ArticulosComponent
    }
];
