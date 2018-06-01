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
  num: number;
  constructor(private concesionarioService: ConcesionarioService) { }

  ngOnInit() {
    this.getConcesionarios();

  }
  getLastId(){
    this.num = this.concesionarios.length;
    this.num = this.concesionarios[this.num - 1].id;
    this.num = this.num + 1;
  }
  getConcesionarios(): void {
    this.concesionarioService.getConcesionarios()
        .subscribe(concesionarios => this.concesionarios = concesionarios, (error: any) => 'hola', () => this.getLastId());
  }

  
}
