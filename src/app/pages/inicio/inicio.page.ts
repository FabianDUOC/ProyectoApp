import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  correo: string = "";
  clave: string = "";
  mensaje: string ="";

  usuario:any =[
    {
      nombre:"",
      apellido: "",
      correo:"",
      telefono:"",
    }
  ]

  autos:any = [
    {
     patente:"",
     marca:"",
     modelo:"",
     asiento:"", 
    }
  ]


  constructor(private router: Router, private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: this.mensaje,      
    });

    await alert.present();
  }

  
  validaCorreo() {
/* 
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9-]/;
  
    if (this.correo.match(valid)) {
      this.login()
    } else {
      this.mensaje = "Ingrese un correo y/o contraseña válidos."
      this.presentAlert();
    }
     */
    this.router.navigate(['/menu']);
  }


/*   login(){
    let navigationExtras: NavigationExtras = {
      state:{
        u: this.correo,
        c: this.clave
      }
    }
    this.router.navigate(['/menu'], navigationExtras);
  } */


  login(){
    if(this.correo == "juan@contacto.cl"){
      this.usuario.nombre = "Juan";
      this.usuario.apellido = "Perez";
      this.usuario.correo = this.correo;
      this.usuario.telefono = "123456789";
      let navigationExtras: NavigationExtras = {
        state:{
          u: this.usuario,
        }
      }
      console.log(this.usuario)
      console.log(navigationExtras);
      this.router.navigate(['/menu'], navigationExtras);

    }
    else{
      this.mensaje = "Ingrese un correo y/o contraseña válidos."
      this.presentAlert();
    }
  }


  ngOnInit() {
  }

}