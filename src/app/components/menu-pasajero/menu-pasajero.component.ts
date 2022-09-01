import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu-pasajero',
  templateUrl: './menu-pasajero.component.html',
  styleUrls: ['./menu-pasajero.component.scss'],
})
export class MenuPasajeroComponent implements OnInit {

  usuario:any;

  //Listas para Ver/Cancelar Viaje
  conductor:any = [
    {
      nombre:"Pedro Gomez", 
    }
  ]

  pasajeros:any = [
    {
      nombre:"Guillermo Astudillo", 
    },
    {
      nombre:"Juan Pérez", 
    },
  ]

  constructor(private router: Router, private activedRouter: ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.u;
      }
    })
  }

  verViaje(){
    let navigationExtras: NavigationExtras = {
      state:{
        c: this.conductor,
        p: this.pasajeros,
      }
    }
    this.router.navigate(['/viaje-pasajero'], navigationExtras);
  }

  ngOnInit() {}

}
