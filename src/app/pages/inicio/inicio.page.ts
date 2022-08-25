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

  constructor(private router: Router, private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Usuario y/o contraseña incorrecta',      
    });

    await alert.present();
  }

  verifLogin(){

    if (this.usuario == "pepe"){
      let navigationExtras: NavigationExtras = {
        state:{
          u: this.usuario,
          c: this.clave
        }
      }
      this.router.navigate(['/menu'], navigationExtras);
    }
    else{
      this.presentAlert();
    }



  }

  ngOnInit() {
  }

}
