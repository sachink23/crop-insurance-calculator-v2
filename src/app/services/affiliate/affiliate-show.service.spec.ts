import { TestBed } from '@angular/core/testing';

import { AffiliateShowService } from './affiliate-show.service';

describe('AffiliateShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffiliateShowService = TestBed.get(AffiliateShowService);
    expect(service).toBeTruthy();
  });
});
