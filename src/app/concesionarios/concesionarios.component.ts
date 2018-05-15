import { ConcesionarioService } from './../concesionario.service';
import { Concesionario } from './../concesionario';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-concesionarios',
  templateUrl: './concesionarios.component.html',
  styleUrls: ['./concesionarios.component.css']
})
export class ConcesionariosComponent implements OnInit {
  concesionarios: Concesionario[];

  constructor(private concesionarioService: ConcesionarioService) { }

  ngOnInit() {
    this.getConcesionarios();
  }

  getConcesionarios(): void {
    this.concesionarioService.getConcesionarios()
        .subscribe(concesionarios => this.concesionarios = concesionarios);
  }
}
