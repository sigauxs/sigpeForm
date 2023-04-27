import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './shared/menu-principal/menu-principal.component';

const routes: Routes = [
  {
    path:'menu',
    component:MenuPrincipalComponent
  },
  {
    path: 'alturas',
    loadChildren: () => import('./alturas/alturas.module').then( m => m.AlturasModule )
  },
  {
    path: 'confinados',
    loadChildren: () => import('./confinados/confinados.module').then( m => m.ConfinadosModule )
  },
  {
     path:'**', redirectTo:'menu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
