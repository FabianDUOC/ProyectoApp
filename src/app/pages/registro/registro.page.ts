import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo: string = "";
  nombre: string = "";
  apellido: string = "";
  clave: string = "";
  clave2: string = "";

  msjCorreo: string = "";
  msjNombre: string = "";
  msjApellido: string = "";
  msjClave: string = "";

  constructor(private router: Router, private alertController: AlertController) { }

  async alertContraseña() {
    const alert = await this.alertController.create({
      message: 'Las contraseñas deben tener al menos 8 caracteres y deben ser iguales',      
    });
  

    await alert.present();
  }
  async alertCorreo() {
    const alert = await this.alertController.create({
      message: 'Ingrese un Correo Valido',      
    });
  

    await alert.present();
  }

  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Cuenta Registrada Correctamente',      
    });
  

    await alert.present();
  }

  validarRegistrar(){

    this.msjCorreo = "";
    this.msjNombre = "";
    this.msjApellido = "";
    this.msjClave = "";

    if (this.clave.length <= 8 || this.clave != this.clave2){
      //this.alertContraseña();
      this.msjClave = "Las contraseñas deben tener al menos 8 caracteres y deben ser iguales"
      }
    if (this.correo.indexOf('@', 0) == -1 || this.correo.indexOf('.', 0) == -1){
      //this.alertCorreo();
      this.msjCorreo = "Ingrese un correo válido"
      }

  }

  ngOnInit() {   
  }

}

