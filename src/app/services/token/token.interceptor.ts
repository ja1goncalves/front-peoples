import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  protected handlerErrorHelper;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
        setHeaders: {
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Basic ' + btoa(environment.USERNAME + ':' + environment.PASSWORD)
        }
    });

    return next.handle(request).pipe(tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {

            if (event.body.error) {
              this.handlerErrorHelper.handle(event);
              throw(event);

            }
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            this.handlerErrorHelper.handle(error);

          }
        }
      )
    );
  }
}
