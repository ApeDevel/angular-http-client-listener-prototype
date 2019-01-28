import { HttpClientListenerModule } from './http-client-listener.module';

describe('HttpClientListenerModule', () => {
  let httpClientListenerModule: HttpClientListenerModule;

  beforeEach(() => {
    httpClientListenerModule = new HttpClientListenerModule();
  });

  it('should create an instance', () => {
    expect(httpClientListenerModule).toBeTruthy();
  });
});
