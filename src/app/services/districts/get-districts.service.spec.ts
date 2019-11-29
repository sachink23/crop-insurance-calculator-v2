import { TestBed } from '@angular/core/testing';

import { GetDistrictsService } from './get-districts.service';

describe('GetDistrictsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDistrictsService = TestBed.get(GetDistrictsService);
    expect(service).toBeTruthy();
  });
});
