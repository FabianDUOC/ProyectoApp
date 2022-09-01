import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.page.html',
  styleUrls: ['./editar-cuenta.page.scss'],
})
export class EditarCuentaPage implements OnInit {

  usuario:any;

  correo: string = "";
  nombre: string = "";
  apellido: string = "";
  telefono: number = null;
  telefono2: string = "";

  msjCorreo: string = "";
  msjNombre: string = "";
  msjApellido: string = "";
  msjTelefono: string = "";
  msjCampos: string = "";

  imagen: any;
  noImagen: boolean = true;
  

  constructor(private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.u;

        this.correo = this.usuario.correo;
        this.nombre = this.usuario.nombre;
        this.apellido = this.usuario.apellido;
        this.telefono = this.usuario.telefono;
      }
    })
  }


  async alertEdit() {
    const alert = await this.alertController.create({
      message: 'Cuenta editada <br> correctamente',      
    });
    await alert.present();
  }

  async alertCamp() {
    const alert = await this.alertController.create({
      message: 'No debe dejar campos vacíos',      
    });
    await alert.present();
  }

  validarCorreo() {
 
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9-]/;
  
    if (this.correo.match(valid)) {
      return true;
    } else {
      this.msjCorreo = "Ingrese un correo válido"
      return false;
    }
  }

  validarEdit(){

    let valido = true;

    this.msjCorreo = "";
    this.msjNombre = "";
    this.msjApellido = "";
    this.msjTelefono = "";

    valido = this.validarCorreo();

    if(/[" "]/.test(this.nombre)){
      this.msjNombre = "Nombre no debe contener espacios"
      valido = false;
    }

    if(/[" "]/.test(this.apellido)){
        this.msjApellido = "Apellido no debe contener espacios"
        valido = false;
    }
    
    if(this.telefono){
      this.telefono2 = this.telefono.toString();
      if (this.telefono2.length != 9 || this.telefono == null) {
        this.msjTelefono = "Número de teléfono debe ser de 9 dígitos";
        valido = false;
      }
    }

    if(!this.correo || !this.nombre || !this.apellido || !this.telefono){
      this.alertCamp();
      valido = false;
    }

    if(valido){
      this.router.navigate(['menu/miCuenta']);
      this.alertEdit()
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

  borrarEdit(){
    this.correo = "";
    this.nombre = "";
    this.apellido = "";
    this.telefono = null;
    this.telefono2 = "";
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
