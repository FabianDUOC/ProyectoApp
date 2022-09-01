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
  msjClave1: string = "";
  msjClave2: string = "";
  msjClave3: string = "";
  msjClave4: string = "";
  msjClave5: string = "";

  constructor(private router: Router, private alertController: AlertController) { }

  async alertEdit() {
    const alert = await this.alertController.create({
      message: 'Contraseña actualizada',      
    });
    await alert.present();
  }

  async alertCamp() {
    const alert = await this.alertController.create({
      message: 'No debe dejar campos vacíos',      
    });
    await alert.present();
  }


  validarClave(){

    this.msjClave = "";
    this.msjClave1 = "";
    this.msjClave2 = "";
    this.msjClave3 = "";
    this.msjClave4 = "";
    this.msjClave5 = "";

    let valido = true;

    if(!this.clave || !this.claveNew || !this.claveNew2){
      this.alertCamp();
      valido = false;
    }
    else{
      if(this.clave == this.claveNew){
        //this.alertCorreo();
        this.msjClave = "La contraseña nueva no puede ser igual a la actual"
        }      
      if(this.claveNew != this.claveNew2){
        this.msjClave2 = "Las contraseñas nuevas deben ser iguales"
        valido = false;
      }
      if(this.clave){
        if (this.clave.length > 8){
          this.msjClave1 = "La contraseña nueva deben tener al menos 8 caracteres"
          valido = false;
        }
      }
      if (!/[A-Z]/.test(this.claveNew)) {
        this.msjClave3 = "La contraseña nueva de tener al menos 1 mayúscula";
        valido = false;
      }
      if (!/[0-9]/.test(this.claveNew)) {
        this.msjClave4 = "La contraseña nueva de tener al menos 1 número";
        valido = false;
      } 
      if (/[ ]/.test(this.claveNew)) {
        this.msjClave5 = "La contraseña nueva no debe tener espacios";
        valido = false;
      }
    }

    if(valido){
      this.router.navigate(['/menu/miCuenta']);
      this.alertEdit();
    }
  }

  borrar(){
    this.clave = "";
    this.claveNew = "";
    this.claveNew2 = "";
    this.msjClave = "";
    this.msjClave1 = "";
    this.msjClave2 = "";
    this.msjClave3 = "";
    this.msjClave4 = "";
    this.msjClave5 = "";
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
