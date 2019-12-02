import { TestBed } from '@angular/core/testing';

import { CalculatorSetupService } from './calculator-setup.service';

describe('CalculatorSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorSetupService = TestBed.get(CalculatorSetupService);
    expect(service).toBeTruthy();
  });
});
