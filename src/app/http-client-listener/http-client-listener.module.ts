import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientListenerComponent } from './components/http-client-listener/http-client-listener.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HttpClientListenerComponent]
})
export class HttpClientListenerModule { }
