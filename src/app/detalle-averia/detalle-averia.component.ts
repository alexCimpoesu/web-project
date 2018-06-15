import { Component, OnInit, Input } from '@angular/core';
import { AveriaService } from './../averia.service';
import { Averia } from './../averia';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-averia',
  templateUrl: './detalle-averia.component.html',
  styleUrls: ['./detalle-averia.component.css']
})
export class DetalleAveriaComponent implements OnInit {

  @Input() averia: Averia;
  @Input() esNuevo: boolean;
  esAdmin: boolean;
  editar: boolean;
  constructor(
    private route: ActivatedRoute,
    private averiaService: AveriaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAveria();
    this.editar = false;
    if (localStorage.getItem('permisos') === '1') {
      this.esAdmin = true;
    }
    else {
      this.esAdmin = false;
    }
  }

  getAveria(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.averiaService.getAveria(id)
        .subscribe(averia => this.averia = averia);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.averiaService.updateAveria(this.averia)
        .subscribe(() => this.goBack());
  }
  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.averiaService.deleteAveria(id)
        .subscribe(() => this.goBack());
  }
  editarAveria(): void {
    this.editar = true;

  }

}



