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
  msjClave2: string = "";
  msjCampos: string = "";

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
    this.msjClave2 = "";
    this.msjCampos = "";

    let valido = true;

    if (this.clave.length <= 8){
      //this.alertContraseña();
      this.msjClave = "Las contraseña deben tener al menos 8 caracteres"
      valido = false;
      }
    if(this.clave != this.clave2){
      this.msjClave2 = "Las contraseña deben ser iguales"
      valido = false;
    }
    if (this.correo.indexOf('@', 0) == -1 || this.correo.indexOf('.', 0) == -1){
      //this.alertCorreo();
      this.msjCorreo = "Ingrese un correo válido"
      valido = false;
      }
    if(!this.correo || !this.nombre || !this.apellido || !this.clave || !this.clave2){
      this.msjCampos = "No debe dejar campos vacíos"
      valido = false;
    }

    if(valido){
      this.router.navigate(['/menu'])
    }
  }

  borrar(){
    this.correo = "";
    this.nombre = "";
    this.apellido = "";
    this.clave = "";
    this.clave2 = "";

    this.msjCorreo = "";
    this.msjNombre = "";
    this.msjApellido = "";
    this.msjClave = "";
    this.msjClave2 = "";
    this.msjCampos = "";
  }

  ngOnInit() {   
  }

}

