import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientListenerComponent } from './http-client-listener.component';

describe('HttpClientListenerComponent', () => {
  let component: HttpClientListenerComponent;
  let fixture: ComponentFixture<HttpClientListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClientListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
