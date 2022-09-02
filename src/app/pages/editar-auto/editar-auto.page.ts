import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.page.html',
  styleUrls: ['./editar-auto.page.scss'],
})
export class EditarAutoPage implements OnInit {

  autos:any;

  marca: string = "";
  modelo: string = "";
  patente: string = "";
  imagenAuto:any;

  msjMarca: string = "";
  msjModelo: string = "";
  msjPatente: string = "";
  msjCampos: string = "";

  imagen: any;
  noImagen: boolean = true;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.autos = this.router.getCurrentNavigation().extras.state.auto;

        this.marca = this.autos[0].marca;
        this.modelo = this.autos[0].modelo;
        this.patente = this.autos[0].patente;
        this.imagenAuto = this.autos[0].imagen;

        
      }
    })
  }

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
      message: 'Auto editado correctamente',      
    });
  

    await alert.present();
  }

  async alertCamp() {
    const alert = await this.alertController.create({
      message: 'Excepto la imagen, no debe dejar campos vacíos',      
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

    // Cambiar Imagen Perfil
    onChange(event) {
      var reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.imagen = event.target.result;
        console.log("imagen cargada");
        this.noImagen = false;
      };
  
      reader.onerror = (event: any) => {
        console.log("El archivo no se pudo cargar " + event.target.error.code);
      };
  
      reader.readAsDataURL(event.target.files[0]);
  
    }

  ngOnInit() {   
  }

}
