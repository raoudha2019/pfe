import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmAddComponent } from './qcm-add.component';

describe('QcmAddComponent', () => {
  let component: QcmAddComponent;
  let fixture: ComponentFixture<QcmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
