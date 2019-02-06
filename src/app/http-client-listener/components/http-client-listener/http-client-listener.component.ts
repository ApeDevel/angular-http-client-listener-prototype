import { Component, OnInit, ViewChild,  } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpWaitService } from '../../services/http-wait.service';
import { WithWaitService } from '../../services/with-wait.service';

@Component({
  selector: 'app-http-client-listener',
  templateUrl: './http-client-listener.component.html',
  styleUrls: ['./http-client-listener.component.css'],
  providers: [ HttpWaitService ]
})
export class HttpClientListenerComponent implements OnInit {

  result: string;

  constructor(private svc: WithWaitService) { }

  ngOnInit() {

  }

  onHttpPromise() {
    this.svc.getData().then((val) => {
      this.result = val;
    })
    .catch(err => {
      console.error(err);
      this.result = 'ERRRRRROOOORRRR!!!';
    });
  }

}
