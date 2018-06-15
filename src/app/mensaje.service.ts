
import { Headers, RequestOptions } from '@angular/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class MensajeService {

  private headerss = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });
  private headers = new HttpHeaders();
  private MensajesURL = 'http://proyecto-laravel.io/api/topics'; // URL de los Mensajes
  private MensajeURL = 'http://proyecto-laravel.io/api/mensaje';
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
  }

  private log(message: string) {
    this.messageService.add('MensajeService: ' + message);
  }

  getMensajes(numero: number): Observable<Mensaje[]> {
    const url = `${this.MensajesURL}/${numero}/mensajes`;
    return this.http.get<Mensaje[]>(url)
      .pipe(
        tap(Mensajes => this.log(`Mensajes recogidos`)),
        catchError(this.handleError('getMensajes', []))
      );
  }

  getMensaje(numero: number): Observable<Mensaje> {
    const url = `${this.MensajeURL}/${numero}`;
    return this.http.get<Mensaje>(url).pipe(
      tap(_ => this.log(`recogido Mensaje numero=${numero}`)),
      catchError(this.handleError<Mensaje>(`getMensaje numero=${numero}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateMensaje(mensaje: Mensaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.MensajeURL}/${mensaje.id}`;
    console.log(url);
    return this.http.put(url, mensaje, httpOptions).pipe(
      tap(_ => this.log(`Mensaje_actualizado id=${mensaje.id}`)),
      catchError(this.handleError<any>('updatMensaje'))
    );
  }
  deleteMensaje(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.MensajeURL}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`Mensaje_borrado id=${id}`)),
      catchError(this.handleError<any>('deleteMensaje'))
    );
  }
  addMensaje(mensaje: Mensaje, numero: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.MensajesURL}/${numero}/mensajes`;
    console.log(JSON.stringify({ cuerpo: mensaje.cuerpo  }));
    return this.http.post(url, JSON.stringify({cuerpo: mensaje.cuerpo  }), httpOptions).pipe(
      tap(_ => this.log(`Mensaje_actualizado id=${mensaje.id}`)),
      catchError(this.handleError<any>('updatMensaje'))
    );
  }
}
