import { ConcesionarioService } from './../concesionario.service';
import { Concesionario } from './../concesionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevo-concesionario',
  templateUrl: './nuevo-concesionario.component.html',
  styleUrls: ['./nuevo-concesionario.component.css']
})
export class NuevoConcesionarioComponent implements OnInit {
  concesionario = new Concesionario();
  constructor(
    private concesionarioService: ConcesionarioService,
    private location: Location) { }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
  add(): void {

    this.concesionarioService.addConcesionario(this.concesionario)
        .subscribe(() => this.goBack(), error => alert('No ha rellenado correctamente alguno de los campos')

      );
  }
}
