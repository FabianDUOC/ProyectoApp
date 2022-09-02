import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {

  hora:string ="";

  msjCampos: string = "";
  sede: string = "";
  autos: string = "";
  asientos: number = null;

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

  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Viaje Registrada Correctamente',      
    });
  

    await alert.present();
  }

  validarRegistrar(){

    this.msjCampos = "";

    let valido = true;

    if(!this.sede || !this.autos || !this.asientos){
      this.presentAlert();
      valido = false;
    }
    if(valido){
      this.router.navigate(['/menu/menuConductor'])
      this.alertEdit();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: "No debe dejar campos vacíos",      
    });
    await alert.present();
  }

  async alertEdit() {
    const alert = await this.alertController.create({
      message: "Viaje creado correctamente",      
    });
    await alert.present();
  }


  borrar(){
    this.sede = "";
    this.autos = "";
    this.asientos = null;
    this.msjCampos = "";
    this.hora = "";
  }

  ngOnInit() {   
  }

}