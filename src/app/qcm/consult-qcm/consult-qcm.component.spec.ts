import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultQcmComponent } from './consult-qcm.component';

describe('ConsultQcmComponent', () => {
  let component: ConsultQcmComponent;
  let fixture: ComponentFixture<ConsultQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
