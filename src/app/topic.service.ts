
import { Headers, RequestOptions } from '@angular/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Mensaje } from './mensaje';

@Injectable()

export class TopicService {

  private headerss = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });
  private headers = new HttpHeaders();
  private TopicsURL = 'http://proyecto-laravel.io/api/topics'; // URL de los Topics
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
  }

  private log(message: string) {
    this.messageService.add('TopicService: ' + message);
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.TopicsURL)
      .pipe(
        tap(Topics => this.log(`Topics recogidos`)),
        catchError(this.handleError('getTopics', []))
      );
  }

  getTopic(numero: number): Observable<Topic> {
    const url = `${this.TopicsURL}/${numero}`;
    return this.http.get<Topic>(url).pipe(
      tap(_ => this.log(`recogido Topic numero=${numero}`)),
      catchError(this.handleError<Topic>(`getTopic numero=${numero}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateTopic(topic: Topic): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.TopicsURL}/${topic.id}`;
    return this.http.put(url, Topic, httpOptions).pipe(
      tap(_ => this.log(`Topic_actualizado id=${topic.id}`)),
      catchError(this.handleError<any>('updatTopic'))
    );
  }
  deleteTopic(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.TopicsURL}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`Topic_borrado id=${id}`)),
      catchError(this.handleError<any>('deleteTopic'))
    );
  }
  addTopic(topic: Topic, mensaje: Mensaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log(JSON.stringify({ titulo: topic.titulo, cuerpo: mensaje.cuerpo  }));
    return this.http.post(this.TopicsURL, JSON.stringify({ titulo: topic.titulo, descripcion: mensaje.cuerpo  }), httpOptions).pipe(
      tap(_ => this.log(`Topic_actualizado id=${topic.id}`)),
      catchError(this.handleError<any>('updatTopic'))
    );
  }
}
