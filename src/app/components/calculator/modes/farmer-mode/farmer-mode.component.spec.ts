import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerModeComponent } from './farmer-mode.component';

describe('FarmerModeComponent', () => {
  let component: FarmerModeComponent;
  let fixture: ComponentFixture<FarmerModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
