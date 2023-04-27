import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { AdministrativoComponent } from './pages/administrativo/administrativo.component';
import { ActualizacionCoordinadorComponent } from './pages/actualizacion-coordinador/actualizacion-coordinador.component';
import { CoordinadorComponent } from './pages/coordinador/coordinador.component';
import { ReentrenamientoComponent } from './pages/reentrenamiento/reentrenamiento.component';
import { TrabajadorAutorizadoComponent } from './pages/trabajador-autorizado/trabajador-autorizado.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'menuAltura', component: MenuComponent },
      { path: 'administrativo', component: AdministrativoComponent },
      { path: 'acoordinador', component: ActualizacionCoordinadorComponent },
      { path: 'coordinador', component: CoordinadorComponent },
      { path: 'reentrenamiento', component: ReentrenamientoComponent },
      { path: 'trabajador', component: TrabajadorAutorizadoComponent },
      { path: '**', redirectTo: 'menuAltura' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlturasRoutingModule { }
