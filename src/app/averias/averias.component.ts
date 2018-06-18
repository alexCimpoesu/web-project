import { FiltroAveriasPipe } from './../filtro-averias.pipe';
import { Component, OnInit } from '@angular/core';
import { Averia } from './../averia';
import { AveriaService } from './../averia.service';

@Component({
  selector: 'app-averias',
  templateUrl: './averias.component.html',
  styleUrls: ['./averias.component.css']
})
export class AveriasComponent implements OnInit {

  averias: Averia[];
  averiasGuardados: Averia[];
  num: number;
  inicio: number;
  fin: number;
  esFin: boolean;
  esInicio: boolean;
  nombreFiltro: string;
  nombreFiltroAnterior: string;
  constructor(private averiaService: AveriaService) { }

  ngOnInit() {
    this.getAverias();
    this.inicio = 0;
    this.fin = 10;
    this.esFin = false;
    this.esInicio = true;
    this.nombreFiltro = '';
  }
  getLastId(){
    if (this.averias.length > 10) {
    this.num = this.averias.length;
    this.num = this.averias[this.num - 1].id;
    this.num = this.num + 1;
    }
  }
  getAverias(): void {
    this.averiaService.getAverias()
        .subscribe(averias => this.averias = averias, (error: any) => 'hola', () => this.getLastId());
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
    if (this.fin >= this.averias.length){
      this.esFin = true;
    }
  }
  borrarFiltro(){
    this.nombreFiltro = '';
  }
}


