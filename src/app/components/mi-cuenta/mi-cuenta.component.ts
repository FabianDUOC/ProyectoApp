import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.scss'],
})
export class MiCuentaComponent implements OnInit {

  usuario:any;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.u;
      }
    })
  }

  async alertReg() {
    const alert = await this.alertController.create({
      message: 'funciona',      
    });
    await alert.present();
  }

  irEditar(){
    let navigationExtras: NavigationExtras = {
      state:{
        u: this.usuario,
      } 
    }
    this.router.navigate(['/editar-cuenta'], navigationExtras);
  }

  ngOnInit() {}

}
