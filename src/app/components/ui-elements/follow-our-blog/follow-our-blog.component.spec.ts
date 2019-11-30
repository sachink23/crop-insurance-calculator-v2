import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowOurBlogComponent } from './follow-our-blog.component';

describe('FollowOurBlogComponent', () => {
  let component: FollowOurBlogComponent;
  let fixture: ComponentFixture<FollowOurBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowOurBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowOurBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
