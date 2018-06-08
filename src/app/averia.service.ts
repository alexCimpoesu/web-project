import { Headers, RequestOptions } from '@angular/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Averia } from './averia';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AveriaService {
  private headerss = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });
  private headers = new HttpHeaders();
  private averiasURL = 'http://proyecto-laravel.io/api/averias'; // URL de los averias
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
  }

  private log(message: string) {
    this.messageService.add('AveriaService: ' + message);
  }

  getAverias(): Observable<Averia[]> {
    return this.http.get<Averia[]>(this.averiasURL)
      .pipe(
        tap(averias => this.log(`averias recogidos`)),
        catchError(this.handleError('getAverias', []))
      );
  }

  getAveria(numero: number): Observable<Averia> {
    const url = `${this.averiasURL}/${numero}`;
    return this.http.get<Averia>(url).pipe(
      tap(_ => this.log(`recogido averia numero=${numero}`)),
      catchError(this.handleError<Averia>(`getAveria numero=${numero}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateAveria(averia: Averia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.averiasURL}/${averia.id}`;
    return this.http.put(url, averia, httpOptions).pipe(
      tap(_ => this.log(`averia_actualizado id=${averia.id}`)),
      catchError(this.handleError<any>('updatAveria'))
    );
  }
  deleteAveria(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.averiasURL}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`averia_borrado id=${id}`)),
      catchError(this.handleError<any>('deleteAveria'))
    );
  }
  addAveria(averia: Averia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(JSON.stringify({ averia }));

    return this.http.post(this.averiasURL, JSON.stringify(averia), httpOptions).pipe(
      tap(_ => this.log(`averia_actualizado id=${averia.id}`)),
      catchError(this.handleError<any>('updatAveria'))
    );
  }
}
