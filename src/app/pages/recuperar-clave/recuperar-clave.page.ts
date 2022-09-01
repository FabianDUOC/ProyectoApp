import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {

  correo: string = "";

  msjCorreo: string = "";
  msjCampos: string = "";

  constructor(private router: Router, private alertController: AlertController) { }
  async alertCorreo() {
    const alert = await this.alertController.create({
      message: 'Ingrese un Correo Valido',      
    });
  

    await alert.present();
  }

  async alertRec() {
    const alert = await this.alertController.create({
      message: 'Solicitud enviada <br> correctamente',      
    });
    await alert.present();
  }
  

  validarRegistrar(){

    this.msjCorreo = "";
    this.msjCampos = "";

    let valido = true;
    
    valido = this.validarCorreo();
    
    if(valido){
      this.router.navigate(['/inicio'])
      this.alertRec();
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
    this.msjCampos = "";
  }

  ngOnInit() {   
  }

}

