import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VleModeComponent } from './vle-mode.component';

describe('VleModeComponent', () => {
  let component: VleModeComponent;
  let fixture: ComponentFixture<VleModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VleModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
