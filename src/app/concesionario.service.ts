import { Headers, RequestOptions } from '@angular/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Concesionario } from './concesionario';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class ConcesionarioService {
  private headerss = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });
  private headers = new HttpHeaders();
  private concesionariosURL = 'http://proyecto-laravel.io/api/concesionarios'; // URL de los concesionarios
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
  }

  private log(message: string) {
    this.messageService.add('ConcesionarioService: ' + message);
  }

getConcesionarios(): Observable<Concesionario[]> {
    return this.http.get<Concesionario[]>(this.concesionariosURL)
        .pipe(
          tap(concesionarios => this.log(`concesionarios recogidos`)),
          catchError(this.handleError('getConcesionarios', []))
        );
}

getConcesionario(numero: number): Observable<Concesionario> {
   const url = `${this.concesionariosURL}/${numero}`;
   return this.http.get<Concesionario>(url).pipe(
     tap(_ => this.log(`recogido concesionario numero=${numero}`)),
     catchError(this.handleError<Concesionario>(`getConcesionario numero=${numero}`))
   );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

updateConcesionario (concesionario: Concesionario): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const url = `${this.concesionariosURL}/${concesionario.id}`;
  return this.http.put(url, concesionario, httpOptions).pipe(
    tap(_ => this.log(`concesionario_actualizado id=${concesionario.id}`)),
    catchError(this.handleError<any>('updatConcesionario'))
  );
}
deleteConcesionario (id: number): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const url = `${this.concesionariosURL}/${id}`;
  return this.http.delete(url, httpOptions).pipe(
    tap(_ => this.log(`concesionario_borrado id=${id}`)),
    catchError(this.handleError<any>('deleteConcesionario'))
  );
}
addConcesionario (concesionario: Concesionario): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post(this.concesionariosURL, JSON.stringify(concesionario), httpOptions).pipe(
    tap(_ => this.log(`concesionario_actualizado id=${concesionario.id}`)),
    catchError(this.handleError<any>('updatConcesionario'))
  );
}
}
