import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable()
export class JWTInterceptorService implements HttpInterceptor{

  constructor(private authent: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt= this.authent.token;
    const clone = req.clone({setHeaders:{Authorization:`Bearer ${jwt}`}})
    return next.handle(clone);
  }


}
