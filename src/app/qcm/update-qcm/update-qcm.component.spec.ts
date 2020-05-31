import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQcmComponent } from './update-qcm.component';

describe('UpdateQcmComponent', () => {
  let component: UpdateQcmComponent;
  let fixture: ComponentFixture<UpdateQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
