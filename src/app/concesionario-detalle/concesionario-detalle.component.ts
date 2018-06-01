import { ConcesionarioService } from './../concesionario.service';
import { Concesionario } from './../concesionario';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-concesionario-detalle',
  templateUrl: './concesionario-detalle.component.html',
  styleUrls: ['./concesionario-detalle.component.css']
})
export class ConcesionarioDetalleComponent implements OnInit {
  @Input() concesionario: Concesionario;
  @Input() esNuevo: boolean;
  editar: boolean;
  constructor(
    private route: ActivatedRoute,
    private concesionarioService: ConcesionarioService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getConcesionario();
    this.editar = false;
  }

  getConcesionario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.concesionarioService.getConcesionario(id)
        .subscribe(concesionario => this.concesionario = concesionario);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.concesionarioService.updateConcesionario(this.concesionario)
        .subscribe(() => this.goBack());
  }
  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.concesionarioService.deleteConcesionario(id)
        .subscribe(() => this.goBack());
  }
  editarConcesionario(): void {
    this.editar = true;
    
  }

}
