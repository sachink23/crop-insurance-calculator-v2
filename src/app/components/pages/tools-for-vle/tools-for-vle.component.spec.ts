import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsForVleComponent } from './tools-for-vle.component';

describe('ToolsForVleComponent', () => {
  let component: ToolsForVleComponent;
  let fixture: ComponentFixture<ToolsForVleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsForVleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsForVleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
