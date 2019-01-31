import { Component, OnInit, ViewChild,  } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-http-client-listener',
  templateUrl: './http-client-listener.component.html',
  styleUrls: ['./http-client-listener.component.css']
})
export class HttpClientListenerComponent implements OnInit {

  @ViewChild('file')
  file;

  result: string;
  status: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onHttpUploadFile() {
    const file = null;
    this.doRequestFile(file).toPromise().then((val) => {
      this.result = val;
    }).
    catch(err => {
      console.error(err);
      this.result = 'ERRRRRROOOORRRR!!!';
    });
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

  private doRequestFile(file: File): Observable<any> {
    const opts = {
      reportProgress: true
    };
    const req = new HttpRequest('POST', 'http://localhost:9090', file, opts);
    const getReq = this.http.request(req).pipe(
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

  private doRequest(): Observable<any> {
    const opts = {
      reportProgress: true
    };
    const req = new HttpRequest('GET', 'http://localhost:9090', opts);
    const getReq = this.http.request(req).pipe(
        tap((evt: any) => {
          if (HttpEventType.Sent === evt.type) {
            this.status = 'Waiting!';
          }

          if (HttpEventType.Response === evt.type) {
            this.status = 'DONE!';
          }
          console.log(evt);
        })
      );

    return getReq;
  }
}
