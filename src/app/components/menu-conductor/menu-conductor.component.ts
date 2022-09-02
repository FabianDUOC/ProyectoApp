import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu-conductor',
  templateUrl: './menu-conductor.component.html',
  styleUrls: ['./menu-conductor.component.scss'],
})
export class MenuConductorComponent implements OnInit {

  usuario:any;

  //Listas para Ver/Cancelar Viaje
  conductor:string = "Pedro Gomez";
  conductorImagen:any = "../../../assets/perfil2.jpg";

  pasajeros:any = [
    {
      nombre:"Guillermo Astudillo",
      imagen:"../../../assets/profile_.png",
    },
    {
      nombre:"Juan Pérez",
      imagen:"../../../assets/perfilEjemplo.jpg", 
    },
  ]

  constructor(private router: Router, private activedRouter: ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.u;
      }
    })
  }

  verViajeC(){
    let navigationExtras: NavigationExtras = {
      state:{
        c: this.conductor,
        ic: this.conductorImagen,
        p: this.pasajeros,
      }
    }
    this.router.navigate(['/viaje-conductor'], navigationExtras);
  }

  ngOnInit() {}

}
