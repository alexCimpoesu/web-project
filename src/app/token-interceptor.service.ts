import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private authGuard: AuthGuardService,
    private auth: AuthService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = request.clone({headers: request.headers.set('Authorization', `Bearer ${this.auth.getToken()}`)});
    return next.handle(authRequest).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            // do stuff with response if you want
        }
    }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 403) {
                this.auth.logout();
            }
        }
    });
}
}
