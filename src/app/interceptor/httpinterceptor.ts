import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";

@Injectable()
export class HttpHeadersInterceptors implements  HttpInterceptor{


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization : `Bearer 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`
              }
        });

        return next.handle(req);    
    }
}