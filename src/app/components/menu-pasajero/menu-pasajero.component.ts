import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-pasajero',
  templateUrl: './menu-pasajero.component.html',
  styleUrls: ['./menu-pasajero.component.scss'],
})
export class MenuPasajeroComponent implements OnInit {

  usuario:any;

  constructor(private router: Router, private activedRouter: ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.u;
      }
    })
  }

  ngOnInit() {}

}
