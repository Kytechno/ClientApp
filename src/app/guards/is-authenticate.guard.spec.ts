import { TestBed } from '@angular/core/testing';

import { IsAuthenticateGuard } from './is-authenticate.guard';

describe('IsAuthenticateGuard', () => {
  let guard: IsAuthenticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthenticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
