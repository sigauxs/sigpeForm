import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlturasRoutingModule } from './alturas-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AdministrativoComponent } from './pages/administrativo/administrativo.component';
import { ActualizacionCoordinadorComponent } from './pages/actualizacion-coordinador/actualizacion-coordinador.component';
import { CoordinadorComponent } from './pages/coordinador/coordinador.component';
import { ReentrenamientoComponent } from './pages/reentrenamiento/reentrenamiento.component';
import { TrabajadorAutorizadoComponent } from './pages/trabajador-autorizado/trabajador-autorizado.component';
import { MenuComponent } from './pages/menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdministrativoComponent,
    ActualizacionCoordinadorComponent,
    CoordinadorComponent,
    ReentrenamientoComponent,
    TrabajadorAutorizadoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AlturasRoutingModule
  ]
})
export class AlturasModule { }
