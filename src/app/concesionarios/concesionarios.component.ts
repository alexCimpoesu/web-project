import { FiltroConcesionariosPipe } from './../filtro-concesionarios.pipe';
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
  concesionariosGuardados: Concesionario[];
  num: number;
  inicio: number;
  fin: number;
  esFin: boolean;
  esInicio: boolean;
  nombreFiltro: string;
  nombreFiltroAnterior: string;
  constructor(private concesionarioService: ConcesionarioService) { }

  ngOnInit() {
    this.getConcesionarios();
    this.inicio = 0;
    this.fin = 10;
    this.esFin = false;
    this.esInicio = true;
    this.nombreFiltro = '';
  }
  getLastId(){
    if (this.concesionarios.length > 10) {
    this.num = this.concesionarios.length;
    this.num = this.concesionarios[this.num - 1].id;
    this.num = this.num + 1;
    }
  }
  getConcesionarios(): void {
    this.concesionarioService.getConcesionarios()
        .subscribe(concesionarios => this.concesionarios = concesionarios, (error: any) => 'hola', () => this.getLastId());
  }
  retrocederDiez(){
    this.esFin = false;
    this.inicio -= 10;
    this.fin -= 10;
    if (this.inicio === 0){
        this.esInicio = true;
    }
  }
  avanzarDiez(){
    this.esInicio = false;
    this.inicio += 10;
    this.fin += 10;
    if (this.fin >= this.concesionarios.length){
      this.esFin = true;
    }
  }
  borrarFiltro(){
    this.esFin = false;
    this.esInicio = true;
    this.inicio = 0; 
    this.fin = 10;
    this.nombreFiltro = '';
  }
  comprobarFiltro(){
    if (this.nombreFiltro !== '') {
      this.inicio = 0; 
      console.log(this.nombreFiltro);
      this.fin = this.concesionarios.length;
      console.log(this.fin);
    }
    else {
      this.borrarFiltro();
    }
  }
}