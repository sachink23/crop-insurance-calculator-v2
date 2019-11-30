import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementStatsComponent } from './achievement-stats.component';

describe('AchievementStatsComponent', () => {
  let component: AchievementStatsComponent;
  let fixture: ComponentFixture<AchievementStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
