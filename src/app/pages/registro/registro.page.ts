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
  telefono: number = null;
  telefono2: string = "";
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

  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Cuenta registrada <br> correctamente',      
    });
    await alert.present();
  }

  async alertCamp() {
    const alert = await this.alertController.create({
      message: 'No debe dejar campos vacíos',      
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

    if(this.correo){
      valido = this.validarCorreo();
    }

    if(this.clave){
      if (this.clave.length > 8){
        this.msjClave1 = "La contraseña deben tener al menos 8 caracteres"
        valido = false;
      }
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

    if(/[" "]/.test(this.nombre)){
      this.msjNombre = "Nombre no debe contener espacios"
      valido = false;
    }

    if(/[" "]/.test(this.apellido)){
        this.msjApellido = "Apellido no debe contener espacios"
        valido = false;
    }

    if(this.telefono){
      this.telefono2 = this.telefono.toString();
      if (this.telefono2.length != 9 || this.telefono == null) {
        this.msjTelefono = "Número de teléfono debe ser de 9 dígitos";
        valido = false;
      }
    }

    if(!this.correo || !this.nombre || !this.apellido || !this.clave || !this.clave2 || !this.telefono){
      this.alertCamp();
      valido = false;
    }

    if(valido){
      this.router.navigate(['menu/miCuenta']);
      this.alertReg();
    }

  }

  validarCorreo() {
 
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9-]/;
  
    if (this.correo.match(valid)) {
      return true;
    } else {
      this.msjCorreo = "Ingrese un correo válido"
      return false;
    }
  }

  borrar(){
    this.correo = "";
    this.nombre = "";
    this.apellido = "";
    this.telefono = null;
    this.telefono2 = "";
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

