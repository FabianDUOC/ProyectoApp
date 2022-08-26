import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.page.html',
  styleUrls: ['./editar-cuenta.page.scss'],
})
export class EditarCuentaPage implements OnInit {

  correo: string = "";
  nombre: string = "";
  apellido: string = "";

  msjCorreo: string = "";
  msjNombre: string = "";
  msjApellido: string = "";

  constructor(private router: Router, private alertController: AlertController) { }


  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Cuenta Editada Correctamente',      
    });
  

    await alert.present();
  }

  validarEdit(){

    this.msjCorreo = "";
    this.msjNombre = "";
    this.msjApellido = "";

    if (this.correo.indexOf('@', 0) == -1 || this.correo.indexOf('.', 0) == -1){
      //this.alertCorreo();
      this.msjCorreo = "Ingrese un correo válido"
      }
    else{
        this.router.navigate(['/cuenta']);
      }
  }

  ngOnInit() {   
  }

}
