import { TestBed } from '@angular/core/testing';

import { WaitingServiceService } from './waiting-service.service';

describe('WaitingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaitingServiceService = TestBed.get(WaitingServiceService);
    expect(service).toBeTruthy();
  });
});
