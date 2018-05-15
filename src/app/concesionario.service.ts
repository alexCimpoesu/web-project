import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Concesionario } from './concesionario';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ConcesionarioService {
  private concesionariosURL = 'api/concesionarios'; // URL de los concesionarios
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

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
  return this.http.put(this.concesionariosURL, concesionario, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${concesionario.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
}
