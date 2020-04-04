import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleConsulterComponent } from './role-consulter.component';

describe('RoleConsulterComponent', () => {
  let component: RoleConsulterComponent;
  let fixture: ComponentFixture<RoleConsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleConsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleConsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
