import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { HttpWaitService } from './http-wait.service';

@Injectable({
  providedIn: 'root'
})
export class WithWaitService {

  constructor(private http: HttpWaitService) { }

  getData(): Promise<string> {
    return this.http.get('http://localhost:9090').toPromise();
  }
}
