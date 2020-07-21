import { TestBed } from '@angular/core/testing';

import { BaseUtilityService } from './base-utility.service';

describe('BaseUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseUtilityService = TestBed.get(BaseUtilityService);
    expect(service).toBeTruthy();
  });
});
