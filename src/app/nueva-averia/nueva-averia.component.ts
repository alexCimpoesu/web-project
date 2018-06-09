import { AveriaService } from './../averia.service';
import { Averia } from './../averia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nueva-averia',
  templateUrl: './nueva-averia.component.html',
  styleUrls: ['./nueva-averia.component.css']
})
export class NuevaAveriaComponent implements OnInit {

  averia = new Averia();
  constructor(
    private averiaService: AveriaService,
    private location: Location) { }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
  add(): void {
    this.averiaService.addAveria(this.averia)
        .subscribe(() => this.goBack());
  }
}
