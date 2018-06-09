import { Component, OnInit } from '@angular/core';
import { Topic } from './../topic';
import { TopicService } from './../topic.service';
import { FiltroConcesionariosPipe } from './../filtro-concesionarios.pipe';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];
  topicsGuardados: Topic[];
  num: number;
  inicio: number;
  fin: number;
  esFin: boolean;
  esInicio: boolean;
  nombreFiltro: string;
  nombreFiltroAnterior: string;
  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.getTopics();
    this.inicio = 0;
    this.fin = 10;
    this.esFin = false;
    this.esInicio = true;
    this.nombreFiltro = '';
  }
  getLastId(){
    this.num = this.topics.length;
    this.num = this.topics[this.num - 1].id;
    this.num = this.num + 1;
  }
  getTopics(): void {
    this.topicService.getTopics()
        .subscribe(topics => this.topics = topics, (error: any) => 'hola', () => this.getLastId());
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
    if (this.fin >= this.topics.length){
      this.esFin = true;
    }
  }
  borrarFiltro(){
    this.nombreFiltro = '';
  }
}
