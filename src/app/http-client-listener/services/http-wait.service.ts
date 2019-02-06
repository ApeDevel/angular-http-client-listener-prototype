import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';
import { WaitingServiceService } from './waiting-service.service';
import { tap, map, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpWaitService {

  constructor(private http: HttpClient, private waitingService: WaitingServiceService) { }


  get(url: string, options: {} = null) {
    const opts = {
      reportProgress: true
    };
    const req = new HttpRequest('GET', url, opts);
    const getReq = this.http.request(req).pipe(
        tap((evt: any) => {
          if (HttpEventType.Sent === evt.type) {
            this.waitingService.showWait();
          }

          if (HttpEventType.Response === evt.type) {
            this.waitingService.showDone();
          }
          console.log(evt);
        }),
        map((val) => {
          return val.body;
        })
      );

    return getReq;
  }

  private doRequestFile(file: File): Observable<any> {
    const opts = {
      reportProgress: true
    };
    const req = new HttpRequest('POST', 'http://localhost:9090', file, opts);
    const getReq = this.http.request(req).pipe(
        tap((evt) => {
          if (HttpEventType.Sent === evt.type) {
            this.waitingService.showWait();
          }

          if (HttpEventType.Response === evt.type) {
            this.waitingService.showDone();
            return evt.body;
          }
        })
      );

    return getReq;
  }

  private doRequest(): Observable<any> {
    const opts = {
      reportProgress: true
    };
    const req = new HttpRequest('GET', 'http://localhost:9090', opts);
    const getReq = this.http.request(req).pipe(
        tap((evt: any) => {
          if (HttpEventType.Sent === evt.type) {
            this.waitingService.showWait();
          }

          if (HttpEventType.Response === evt.type) {
            this.waitingService.showDone();
          }
          console.log(evt);
        })
      );

    return getReq;
  }

}
