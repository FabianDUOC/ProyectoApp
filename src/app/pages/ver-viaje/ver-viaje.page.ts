import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-viaje',
  templateUrl: './ver-viaje.page.html',
  styleUrls: ['./ver-viaje.page.scss'],
})
export class VerViajePage implements OnInit {

  sede : string = "";
  viaje:any;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.sede = this.router.getCurrentNavigation().extras.state.s;
        this.viaje = this.router.getCurrentNavigation().extras.state.v;
      }

    })
  }

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

  reservar(){
    this.router.navigate(['menu/menuPasajero']);
    this.alertReserva();
  }

  async alertReserva() {
    const alert = await this.alertController.create({
      message: 'Viaje reservado',      
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
