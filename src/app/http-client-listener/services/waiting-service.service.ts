import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WaitingServiceService {

  waitCounter = 0;

  constructor() { }

  showWait() {
    ++this.waitCounter;
    document.getElementById('waitPlaceholder').innerHTML = 'Wait';
  }

  showDone() {
    if (this.waitCounter > 0) {
      --this.waitCounter;
    }
    if (this.waitCounter === 0) {
      document.getElementById('waitPlaceholder').innerHTML = 'Done';
    }
  }
}
