import { Routes } from '@angular/router';
import { CarruselComponent } from './body/carrusel/carrusel.component';
import { TablaComponent } from './body/tabla/tabla.component';
import path from 'path';

export const routes: Routes = [
    {path: 'carrusel', component: CarruselComponent},
    {path: 'tablas', component: TablaComponent},
    { path: '', redirectTo: 'tablas', pathMatch: 'full' } // Redirigir por defecto a 'tarjetas'
];
