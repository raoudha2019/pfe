import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QcmComponent } from '../qcm/qcm.component';
import { QcmAddComponent } from './qcm-add/qcm-add.component';
import { DomaineComponent } from './domaine/domaine.component';
import { DeleteQcmComponent } from './delete-qcm/delete-qcm.component';
import { UpdateQcmComponent } from './update-qcm/update-qcm.component';
import { ConsultQcmComponent } from './consult-qcm/consult-qcm.component';



@NgModule({
  declarations: [QcmComponent, QcmAddComponent, DomaineComponent, DeleteQcmComponent, UpdateQcmComponent, ConsultQcmComponent],
  imports: [
    CommonModule
  ]
})
export class QcmModule { }
