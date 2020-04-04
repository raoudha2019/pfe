import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmBtnComponent } from './qcm-btn.component';

describe('QcmBtnComponent', () => {
  let component: QcmBtnComponent;
  let fixture: ComponentFixture<QcmBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
