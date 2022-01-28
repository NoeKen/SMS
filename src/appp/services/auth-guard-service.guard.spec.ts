import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceGuard } from './auth-guard-service.guard';

describe('AuthGuardServiceGuard', () => {
  let guard: AuthGuardServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
