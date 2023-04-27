import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfinadosRoutingModule } from './confinados-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { TrabajadorEntranteComponent } from './pages/trabajador-entrante/trabajador-entrante.component';
import { VigiaComponent } from './pages/vigia/vigia.component';
import { SupervisorComponent } from './pages/supervisor/supervisor.component';
import { AdministradorConfinadosComponent } from './pages/administrador-confinados/administrador-confinados.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    MenuComponent,
    TrabajadorEntranteComponent,
    VigiaComponent,
    SupervisorComponent,
    AdministradorConfinadosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConfinadosRoutingModule
  ]
})
export class ConfinadosModule { }
