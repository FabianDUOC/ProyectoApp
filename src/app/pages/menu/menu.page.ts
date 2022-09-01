import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user:any;
  selectMenu: string = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state.u) {
        this.user = this.router.getCurrentNavigation().extras.state.u;
        let navigationExtras: NavigationExtras = {
          state:{
            u: this.user,
          }
        }
        this.router.navigate(['menu/miCuenta'], navigationExtras);
      }
      if (this.router.getCurrentNavigation().extras.state.selectMenu) {
        this.selectMenu = this.router.getCurrentNavigation().extras.state.selectMenu;
      }
    })

    //this.router.navigate(['menu/miCuenta']);
  }

  segmentChanged($event) {
    let direccion = $event.detail.value;
    let navigationExtras: NavigationExtras = {
      state:{
        u: this.user,
      } 
    }
    this.router.navigate(['menu/' + direccion],navigationExtras);
  }

  ngOnInit() {
  }

}
