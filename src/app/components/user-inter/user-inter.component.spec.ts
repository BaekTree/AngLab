import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterComponent } from './user-inter.component';

describe('UserInterComponent', () => {
  let component: UserInterComponent;
  let fixture: ComponentFixture<UserInterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
