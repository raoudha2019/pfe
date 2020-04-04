import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsulterComponent } from './user-consulter.component';

describe('UserConsulterComponent', () => {
  let component: UserConsulterComponent;
  let fixture: ComponentFixture<UserConsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
