import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common'

@Component({
  selector: 'app-viaje-pasajero',
  templateUrl: './viaje-pasajero.page.html',
  styleUrls: ['./viaje-pasajero.page.scss'],
})
export class ViajePasajeroPage implements OnInit {

  conductor:string = "";
  pasajeros:any;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController,private location: Location) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.conductor = this.router.getCurrentNavigation().extras.state.c;
        this.pasajeros = this.router.getCurrentNavigation().extras.state.p;
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

  cancelarV(){
    this.conductor = "";
    this.pasajeros = null;
    this.alert();
  }

  async alert() {
    const alert = await this.alertController.create({
      message: 'Viaje cancelado',      
    });
    await alert.present();
  }
  back(): void {
    this.location.back()
  }
  ngOnInit() {
  }

}
