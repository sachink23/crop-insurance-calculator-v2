import { TestBed } from '@angular/core/testing';

import { GetStatesService } from './get-states.service';

describe('GetStatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStatesService = TestBed.get(GetStatesService);
    expect(service).toBeTruthy();
  });
});
