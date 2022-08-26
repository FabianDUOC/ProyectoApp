import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: string = "";
  clave: string = "";
  mensaje: string ="";

  constructor(private router: Router, private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: this.mensaje,      
    });

    await alert.present();
  }

  validarLogin(){

    
     /* 
    //VALIDACION DE FORMATO CORREO
    if(this.usuario.indexOf('@', 0) == -1 || this.usuario.indexOf('.', 0) == -1){
      this.mensaje = "Ingrese un correo electronico válido."
      this.presentAlert();
    }
    else{
      let navigationExtras: NavigationExtras = {
        state:{
          u: this.usuario,
          c: this.clave
        }
      }
      this.router.navigate(['/menu'], navigationExtras);
    } 
      */
    
    this.router.navigate(['/menu']);

  }

  ngOnInit() {
  }

}
