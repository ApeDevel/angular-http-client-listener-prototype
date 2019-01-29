import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-http-client-listener',
  templateUrl: './http-client-listener.component.html',
  styleUrls: ['./http-client-listener.component.css']
})
export class HttpClientListenerComponent implements OnInit {

  result: string;
  status: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onHttpPromise() {
    this.doRequest().toPromise().then((val) => {
      this.result = val;
    }).
    catch(err => {
      console.error(err);
      this.result = 'ERRRRRROOOORRRR!!!';
    });
  }

  onHttpObservable() {
    this.doRequest().subscribe(evt => {
      console.log(evt);
    });
  }

  private doGet(): Observable<any> {
    const getReq = this.http.get('http://localhost:9090', {
      reportProgress: true
    });

      getReq.subscribe((evt: any) => {
        if (HttpEventType.Sent === evt.type) {
          this.status = 'Waiting!';
        }

        if (HttpEventType.Response === evt.type) {
          this.status = 'DONE!';
        }
      });

    return getReq;
  }

  private doRequest(): Observable<any> {
    const getReq = this.http.request('GET', 'http://localhost:9090', {
        reportProgress: true
      }).pipe(
        tap((evt: any) => {
          if (HttpEventType.Sent === evt.type) {
            this.status = 'Waiting!';
          }

          if (HttpEventType.Response === evt.type) {
            this.status = 'DONE!';
          }
        })
      );

    return getReq;
  }
}
