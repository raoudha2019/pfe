import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQcmComponent } from './delete-qcm.component';

describe('DeleteQcmComponent', () => {
  let component: DeleteQcmComponent;
  let fixture: ComponentFixture<DeleteQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
