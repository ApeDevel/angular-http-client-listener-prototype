import { TestBed } from '@angular/core/testing';

import { WithWaitService } from './with-wait.service';

describe('WithWaitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WithWaitService = TestBed.get(WithWaitService);
    expect(service).toBeTruthy();
  });
});
