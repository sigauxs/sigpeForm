import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';



@NgModule({
  declarations: [
     NavBarComponent,
     FooterComponent,
     MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  ,exports:[
   NavBarComponent,
   FooterComponent
  ]
})
export class SharedModule { }
