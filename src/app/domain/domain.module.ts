import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDomainComponent } from './add-domain/add-domain.component';
import {DialogComponent} from './../dialog/dialog.component';



@NgModule({
  declarations: [AddDomainComponent],
  imports: [
    CommonModule, DialogComponent,
  ]
})
export class DomainModule { }
