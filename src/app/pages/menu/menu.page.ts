import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  u: string = "";
  c: string = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.u = this.router.getCurrentNavigation().extras.state.u;
        this.c = this.router.getCurrentNavigation().extras.state.c;
      }

    })

    this.router.navigate(['menu/menuInicio']);
  }

  segmentChanged($event) {
    let direccion = $event.detail.value;
    this.router.navigate(['menu/' + direccion]);

  }

  ngOnInit() {
  }

}
