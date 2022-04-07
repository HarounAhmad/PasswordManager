import { TestBed } from '@angular/core/testing';

import { LowResolutionGuard } from './low-resolution.guard';

describe('LowResolutionGuard', () => {
  let guard: LowResolutionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LowResolutionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
