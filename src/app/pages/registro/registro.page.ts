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
  telefono: string = "";
  clave: string = "";
  clave2: string = "";

  msjCorreo: string = "";
  msjNombre: string = "";
  msjApellido: string = "";
  msjTelefono: string = "";
  msjClave1: string = "";
  msjClave2: string = "";
  msjClave3: string = "";
  msjClave4: string = "";
  msjClave5: string = "";
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

  // Validaciones de Registro
  validarRegistrar(){

    this.msjCorreo = "";
    this.msjNombre = "";
    this.msjApellido = "";
    this.msjTelefono = "";
    this.msjClave1 = "";
    this.msjClave2 = "";
    this.msjCampos = "";

    let valido = true;

    if (this.clave.length < 8){
      this.msjClave1 = "La contraseña deben tener al menos 8 caracteres"
      valido = false;
    }
    if(this.clave != this.clave2){
      this.msjClave2 = "Las contraseñas deben ser iguales"
      valido = false;
    }
    if (!/[A-Z]/.test(this.clave)) {
      this.msjClave3 = "La contraseña de tener al menos 1 mayúscula";
      valido = false;
    }
    if (!/[0-9]/.test(this.clave)) {
      this.msjClave4 = "La contraseña de tener al menos 1 número";
      valido = false;
    } 
    if (/[ ]/.test(this.clave)) {
      this.msjClave5 = "La contraseña no debe tener espacios";
      valido = false;
    }
    if (this.correo.indexOf('@', 0) == -1 || this.correo.indexOf('.', 0) == -1){
      this.msjCorreo = "Ingrese un correo válido"
      valido = false;
    }

    if(/[" "]/.test(this.nombre)){
      this.msjNombre = "Nombre no debe contener espacios"
      valido = false;
    }

    if(/[" "]/.test(this.apellido)){
        this.msjApellido = "Apellido no debe contener espacios"
        valido = false;
    }

    if (this.telefono.trim().length != 9) {
      this.msjTelefono = "Número de teléfono debe ser de 9 dígitos";
      valido = false;
    }

    if(!this.correo || !this.nombre || !this.apellido || !this.clave || !this.clave2){
      this.msjCampos = "No debe dejar campos vacíos"
      valido = false;
    }

  }

  borrar(){
    this.correo = "";
    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
    this.clave = "";
    this.clave2 = "";

    this.msjCorreo = "";
    this.msjNombre = "";
    this.msjApellido = "";
    this.msjTelefono = "";
    this.msjClave1 = "";
    this.msjClave2 = "";
    this.msjClave3 = "";
    this.msjClave4 = "";
    this.msjClave5 = "";
    this.msjCampos = "";
  }

  ngOnInit() {   
  }

}

