import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-ver-viaje',
  templateUrl: './ver-viaje.page.html',
  styleUrls: ['./ver-viaje.page.scss'],
})
export class VerViajePage implements OnInit {

  s : string = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.s = this.router.getCurrentNavigation().extras.state.s;
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

  ngOnInit() {
  }

}
