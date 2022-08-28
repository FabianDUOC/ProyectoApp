import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {
  clave: string = "";
  claveNew: string = "";
  claveNew2: string = "";
  msjClave: string = "";
  msjClave2: string = "";

  constructor(private router: Router, private alertController: AlertController) { }

  async alertContraseña() {
    const alert = await this.alertController.create({
      message: 'Las contraseñas deben tener al menos 8 caracteres y deben ser iguales',      
    });
  

    await alert.present();
  }

  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Cuenta Registrada Correctamente',      
    });
  

    await alert.present();
  }

  validarClave(){

    this.msjClave = "";


    if (this.clave.length < 8 || this.claveNew.length < 8 || this.claveNew != this.claveNew2){
      //this.alertContraseña();
      this.msjClave = "Las contraseña deben tener al menos 8 caracteres y las contraseñas nuevas deben ser iguales"
      }
    else if(this.clave == this.claveNew){
      //this.alertCorreo();
      this.msjClave = "La contraseña nueva no puede ser igual a la actual"
      }
      else{
        this.alertReg();
        this.router.navigate(['/cuenta']);
      }

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

  ngOnInit() {   
  }
}
