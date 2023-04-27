import { Component } from '@angular/core';
import { URL } from '../interfaces/url.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent {

  alturas:URL[] = [
    {
      name:'Administrativo para Jefes De Área - TA ',
      url:'administrativo'
    },
    {
      name:'Actualización coordinador de trabajo en alturas - TA ',
      url:'acoordinador'
    },
    {
      name:' Coordinador de trabajo en alturas - TA ',
      url:'coordinador'
    },
    {
      name:'Reentrenamiento Trabajador Autorizado - TA ',
      url:'reentrenamiento'
    },
    {
      name:'Trabajador autorizada - TA ',
      url:'trabajador'
    }
  ]





 confinados:URL[] = [
    {
      name:'EV Trabajador entrante en espacios confinados - EC ',
      url:'trabajadorentrante'
    },
    {
      name:'EV Vigía de seguridad en espacios confinados - EC ',
      url:'vigia'
    },
    {
      name:'EV Supervisor en espacios confinados - EC ',
      url:'supervisor'
    },
    {
      name:'EV Administrador del programa de gestion en EC',
      url:'administrativo'
    },

  ]




}
