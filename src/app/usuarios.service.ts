import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsuariosService {

  private headerss = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });
  private headers = new HttpHeaders();
  private usuariosURL = 'http://proyecto-laravel.io/api/usuarios'; // URL de los usuarios
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
  }

  private log(message: string) {
    this.messageService.add('UsuarioService: ' + message);
  }

getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosURL)
        .pipe(
          tap(usuarios => this.log(`usuarios recogidos`)),
          catchError(this.handleError('getUsuarios', []))
        );
}

getUsuario(numero: number): Observable<Usuario> {
   const url = `${this.usuariosURL}/${numero}`;
   return this.http.get<Usuario>(url).pipe(
     tap(_ => this.log(`recogido usuario numero=${numero}`)),
     catchError(this.handleError<Usuario>(`getUsuario numero=${numero}`))
   );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

updateUsuario (usuario: Usuario): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const url = `${this.usuariosURL}/${usuario.id}`;
  return this.http.put(url, usuario, httpOptions).pipe(
    tap(_ => this.log(`usuario_actualizado id=${usuario.id}`)),
    catchError(this.handleError<any>('updatUsuario'))
  );
}
deleteUsuario (id: number): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const url = `${this.usuariosURL}/${id}`;
  return this.http.delete(url, httpOptions).pipe(
    tap(_ => this.log(`usuario_borrado id=${id}`)),
    catchError(this.handleError<any>('deleteUsuario'))
  );
}
addUsuario (usuario: Usuario): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post(this.usuariosURL, JSON.stringify(usuario), httpOptions).pipe(
    tap(_ => this.log(`usuario_actualizado id=${usuario.id}`)),
    catchError(this.handleError<any>('updatUsuario'))
  );
}
}
