import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientListenerComponent } from './http-client-listener/components/http-client-listener/http-client-listener.component';
import { HttpClientListenerModule } from './http-client-listener/http-client-listener.module';

const appRoutes: Routes = [
  { path: '', component: HttpClientListenerComponent },
  { path: '**', component: HttpClientListenerComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientListenerModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
