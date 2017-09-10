import { Injectable } from '@angular/core';
import {HttpResponse, HttpEvent,  HttpInterceptor,  HttpHandler,  HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AjuroInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(JSON.stringify( req, null, 2 ));
    const reqCopy = req.clone({
      // headers: req.headers.set('Authorization', 'token <your GitHub token>')
    });
    return next.handle(reqCopy);
  }
  response (resp: HttpResponse<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(JSON.stringify( resp, null, 2 ));
    const respCopy = resp.clone({
      // headers: req.headers.set('Authorization', 'token <your GitHub token>')
    });
    return null; // next.handle(respCopy);
  }
}
