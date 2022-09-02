import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.page.html',
  styleUrls: ['./agregar-auto.page.scss'],
})
export class AgregarAutoPage implements OnInit {

  marca: string = "";
  modelo: string = "";
  patente: string = "";

  msjMarca: string = "";
  msjModelo: string = "";
  msjPatente: string = "";
  msjCampos: string = "";

  constructor(private router: Router, private alertController: AlertController) { }

      // Seleccion del Menu Footer
      segmentChanged($event) {
        let direccion = $event.detail.value;
    
        let navigationExtras: NavigationExtras = {
          state:{
            selectMenu: direccion,
          }
        }
        this.router.navigate(['menu/' + direccion],navigationExtras);
      }


  async alertEdit() {
    const alert = await this.alertController.create({
      message: 'Auto agregado correctamente',      
    });
    await alert.present();
  }

  async alertCamp() {
    const alert = await this.alertController.create({
      message: 'No debe dejar campos vacíos',      
    });
    await alert.present();
  }

  validarEdit(){

    this.msjMarca = "";
    this.msjModelo = "";
    this.msjPatente = "";
    this.msjCampos = "";
    let valido = true;

    if(!this.marca || !this.modelo || !this.patente){
      this.alertCamp();
      valido = false;
    }

    if(valido){
        this.router.navigate(['/mis-autos'])
        this.alertEdit();
      }
  }
  borrar(){
    this.patente = "";
    this.modelo = "";
    this.marca = "";

    this.msjMarca = "";
    this.msjModelo = "";
    this.msjPatente = "";
    this.msjCampos = "";
  }
  
  ngOnInit() {
  }

}
