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

  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Solicitud Registrada Correctamente',      
    });
  

    await alert.present();
  }

  validarRegistrar(){

    this.msjCorreo = "";
    this.msjCampos = "";

    let valido = true;

    if (this.correo.indexOf('@', 0) == -1 || this.correo.indexOf('.', 0) == -1){
      //this.alertCorreo();
      this.msjCorreo = "Ingrese un correo válido"
      valido = false;
      }
    if(valido){
      this.router.navigate(['/inicio'])
    }
  }

  borrar(){
    this.correo = "";
    this.msjCampos = "";
  }

  ngOnInit() {   
  }

}

