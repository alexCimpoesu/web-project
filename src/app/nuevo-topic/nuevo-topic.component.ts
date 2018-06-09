import { Mensaje } from './../mensaje';
import { TopicService } from './../topic.service';
import { Topic } from './../topic';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevo-topic',
  templateUrl: './nuevo-topic.component.html',
  styleUrls: ['./nuevo-topic.component.css']
})
export class NuevoTopicComponent implements OnInit {
  topic = new Topic();
  mensaje = new Mensaje();
  constructor(
    private topicService: TopicService,
    private location: Location) { }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
  add(): void {
    
    this.topicService.addTopic(this.topic, this.mensaje)
        .subscribe(() => this.goBack()

      );
  }
}
