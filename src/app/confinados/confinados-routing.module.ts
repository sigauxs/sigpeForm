import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AdministradorConfinadosComponent } from './pages/administrador-confinados/administrador-confinados.component';
import { SupervisorComponent } from './pages/supervisor/supervisor.component';
import { VigiaComponent } from './pages/vigia/vigia.component';
import { TrabajadorEntranteComponent } from './pages/trabajador-entrante/trabajador-entrante.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'menuconfinado', component: MenuComponent },
      { path: 'administrativo', component: AdministradorConfinadosComponent },
      { path: 'supervisor', component: SupervisorComponent},
      { path: 'vigia', component: VigiaComponent },
      { path: 'trabajadorentrante', component: TrabajadorEntranteComponent },
      { path: '**', redirectTo: 'menuconfinado' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfinadosRoutingModule { }
