import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  constructor(private router: Router) { }

    // Seleccion del Menu Footer
    segmentChanged($event) {
      let direccion = $event.detail.value;
  
      let navigationExtras: NavigationExtras = {
        state:{
          selectMenu: direccion,
        }
      }
      this.router.navigate(['menu/' + direccion],navigationExtras);
    }

  ngOnInit() {
  }

}
