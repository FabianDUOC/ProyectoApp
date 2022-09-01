import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  sede: string = "";

  //Listas para Buscar Viaje
  viaje1:any = [
    {
      nombre:"Pedro Gomez",
      destino:"Rene's Farm3",
      precio:"2000",
      asientos:"1/3",
      hora: "17:40", 
    }
  ]

  viaje2:any = [
    {
      nombre:"Andres Gomez",
      destino:"Rene's Farm",
      precio:"2000",
      asientos:"2/3",
      hora: "15:40", 
    },
    {
      nombre:"Pepe",
      destino:"Rene's Farm2",
      precio:"2600",
      asientos:"1/4",
      hora: "20:40",
    }
  ]

  viaje3:any = [
    {
      nombre:"Pedro Gomez",
      destino:"Rene's Farm4",
      precio:"2700",
      asientos:"1/4",
      hora: "19:00", 
    }
  ]

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

    async presentAlert() {
      const alert = await this.alertController.create({
        message: "Seleccione una sede",      
      });
  
      await alert.present();
    }
    /* 
    buscarViaje(){
      if (this.sede){
        let navigationExtras: NavigationExtras = {
          state:{
            s: this.sede,
          }
        }
        console.log(this.sede)
        this.router.navigate(['/ver-viaje'],navigationExtras);
      }
      else{
        this.presentAlert();
      }   
    }
    */

    buscarViaje(){
      if (this.sede){
        if(this.sede == "Plaza Norte"){
          let navigationExtras: NavigationExtras = {
            state:{
              s: this.sede,

              v: this.viaje1,
            }
          }
          console.log(this.sede)
          this.router.navigate(['/ver-viaje'], navigationExtras);
        }
        if(this.sede == "Alameda"){
          let navigationExtras: NavigationExtras = {
            state:{
              s: this.sede,

              v: this.viaje2,
            }
          }
          console.log(this.sede)
          this.router.navigate(['/ver-viaje'], navigationExtras);
        }
        if(this.sede == "Maipú"){
          let navigationExtras: NavigationExtras = {
            state:{
              s: this.sede,

              v: this.viaje3,
            }
          }
          console.log(this.sede)
          this.router.navigate(['/ver-viaje'], navigationExtras);
        }
      }
      else{
        this.presentAlert();
      }   
    }

  ngOnInit() {
  }

}
