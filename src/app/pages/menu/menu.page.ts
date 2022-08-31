import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  u:any ;
  selectMenu: string = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.u = this.router.getCurrentNavigation().extras.state.u;
        this.selectMenu = this.router.getCurrentNavigation().extras.state.selectMenu;
      }
      console.log(this.u)

    })

    this.router.navigate(['menu/miCuenta']);
  }

  segmentChanged($event) {
    let direccion = $event.detail.value;
    this.router.navigate(['menu/' + direccion]);

  }

  ngOnInit() {
  }

}
