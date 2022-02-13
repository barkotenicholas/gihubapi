import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { environment as env } from "src/environments/environment";
@Injectable()
export class HttpHeadersInterceptors implements  HttpInterceptor{


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Authorization' : `Bearer ${env.token}`
              }
        });

        return next.handle(req);    
    }
}