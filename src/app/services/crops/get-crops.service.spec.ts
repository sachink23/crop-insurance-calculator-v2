import { TestBed } from '@angular/core/testing';

import { GetCropsService } from './get-crops.service';

describe('GetCropsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCropsService = TestBed.get(GetCropsService);
    expect(service).toBeTruthy();
  });
});
