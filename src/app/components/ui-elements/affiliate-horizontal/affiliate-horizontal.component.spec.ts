import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateHorizontalComponent } from './affiliate-horizontal.component';

describe('AffiliateHorizontalComponent', () => {
  let component: AffiliateHorizontalComponent;
  let fixture: ComponentFixture<AffiliateHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
