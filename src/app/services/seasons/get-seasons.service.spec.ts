import { TestBed } from '@angular/core/testing';

import { GetSeasonsService } from './get-seasons.service';

describe('GetSeasonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSeasonsService = TestBed.get(GetSeasonsService);
    expect(service).toBeTruthy();
  });
});
