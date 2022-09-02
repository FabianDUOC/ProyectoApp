import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-autos',
  templateUrl: './mis-autos.page.html',
  styleUrls: ['./mis-autos.page.scss'],
})
export class MisAutosPage implements OnInit {

  autos:any = [
    {
      patente:"xyxy-98",
      marca:"Hyundai",
      modelo:"Ioniq",
      imagen:"/assets/ioniq.jpg", 
    }
  ]

  constructor(private router: Router, private alertController: AlertController) { }

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

  eliminarAuto(){
    this.autos = null;
    this.alertEli();
  }

  async alertEli() {
    const alert = await this.alertController.create({
      message: 'Auto eliminado <br> correctamente',      
    });
    await alert.present();
  }

  irEditar(){
    let navigationExtras: NavigationExtras = {
      state:{
        auto: this.autos,
      } 
    }
    this.router.navigate(['/editar-auto'], navigationExtras);
  }

  ngOnInit() {
  }

}
