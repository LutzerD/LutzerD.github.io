import { TestBed } from '@angular/core/testing';

import { ProductionOnlyGuard } from './production-only.guard';

describe('ProductionOnlyGuard', () => {
  let guard: ProductionOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductionOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
