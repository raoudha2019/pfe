import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QcmComponent } from '../qcm/qcm.component';
import { QcmAddComponent } from './qcm-add/qcm-add.component';



@NgModule({
  declarations: [QcmComponent, QcmAddComponent],
  imports: [
    CommonModule
  ]
})
export class QcmModule { }
