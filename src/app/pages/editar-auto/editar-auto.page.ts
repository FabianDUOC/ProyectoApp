import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.page.html',
  styleUrls: ['./editar-auto.page.scss'],
})
export class EditarAutoPage implements OnInit {

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


  async alertReg() {
    const alert = await this.alertController.create({
      message: 'Auto Editado Correctamente',      
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
      this.msjCampos = "No debe dejar campos vacíos"
      valido = false;
    }
    if(this.patente.indexOf('-', 0) == -1){
      //this.alertCorreo();
      this.msjPatente = "Ingrese una patente valida"
      valido = false;
      }
    if(valido){
        this.router.navigate(['/mis-autos'])
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
