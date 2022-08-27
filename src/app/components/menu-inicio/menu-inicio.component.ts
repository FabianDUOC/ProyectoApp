import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.scss'],
})
export class MenuInicioComponent implements OnInit {

  constructor(private router: Router) { }

  menuPasajero() {
    this.router.navigate(['../pages/menu/menuPasajero']);
  }

  ngOnInit() {}

}
