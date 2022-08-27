import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.scss'],
})
export class MenuInicioComponent implements OnInit {

  constructor(private router: Router) { }

  goMenuPasajero() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit() {}

}
