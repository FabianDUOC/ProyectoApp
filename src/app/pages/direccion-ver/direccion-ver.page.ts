import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-direccion-ver',
  templateUrl: './direccion-ver.page.html',
  styleUrls: ['./direccion-ver.page.scss'],
})
export class DireccionVerPage implements OnInit {

  constructor(private location: Location) { }
  back(): void {
    this.location.back()
  }
  ngOnInit() {
  }

}
