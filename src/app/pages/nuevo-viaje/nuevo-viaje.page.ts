import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {



  msjCampos: string = "";
  sede: string = "";
  autos: string = "";
  asientos: number = null;

  constructor(private router: Router, private alertController: AlertController) { }

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
      this.msjCampos = "No debe dejar campos vacíos"
      valido = false;
    }
    if(valido){
      this.router.navigate(['/menu-conductor'])
    }
  }

  borrar(){
    this.sede = "";
    this.autos = "";
    this.asientos = null;
    this.msjCampos = "";
  }

  ngOnInit() {   
  }

}