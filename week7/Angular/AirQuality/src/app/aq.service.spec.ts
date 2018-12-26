import { TestBed } from '@angular/core/testing';

import { AqService } from './aq.service';

describe('AqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AqService = TestBed.get(AqService);
    expect(service).toBeTruthy();
  });
});
