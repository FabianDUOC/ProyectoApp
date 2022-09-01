import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
  telefono: number;

  msjCorreo: string = "";
  msjNombre: string = "";
  msjApellido: string = "";
  msjTelefono: string = "";

  imagen: any;
  noImagen: boolean = true;
  

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
    this.msjTelefono = "";

    if (this.correo.indexOf('@', 0) == -1 || this.correo.indexOf('.', 0) == -1){
      //this.alertCorreo();
      this.msjCorreo = "Ingrese un correo válido"
      }
    else{
        this.router.navigate(['/cuenta']);
      }
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
