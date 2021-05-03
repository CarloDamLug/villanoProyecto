import {
  Component,
  OnInit
} from '@angular/core';

import { Villano } from './villano';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {


  poder = 0;

  VILLANOS: Villano[] = [
    {id: 1, nombre: 'THANOS', poder: 0, nombrepoder: 'SUPER FUERZA'},
    {id: 2, nombre: 'DR.OCTOPUS', poder: 0, nombrepoder: 'CUATRO TENTACULOS' },
    {id: 3, nombre: 'VENOM', poder: 0, nombrepoder: 'FUERZA Y AGILIDAD'},
    {id: 4, nombre: 'DUENDE VERDE', poder: 0, nombrepoder: 'FUERZA SOBREHUMANA'},
    {id: 5, nombre: 'KARLY', poder:  0,nombrepoder: 'SUPERSOLDADO'}
    ];

  constructor() { }

  ngOnInit(): void {
  }
  aumentarPoder(id: number, poder: number, nom: string, nompoder: string){
    poder++;
    let itemIndex = this.VILLANOS.findIndex(item => item.id == id);
    this.VILLANOS[itemIndex] = {id:id, nombre: nom, poder:poder, nombrepoder: nompoder};
  }

}
