import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtestComponent } from './addtest/addtest.component';
import { ListTestComponent } from './list-test/list-test.component';
import { ConsultTestComponent } from './consult-test/consult-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { CreateFileComponent } from './create-file/create-file.component';
import { EditTestComponent } from './edit-test/edit-test.component';



@NgModule({
  declarations: [AddtestComponent, ListTestComponent, ConsultTestComponent, DeleteTestComponent, CreateFileComponent, EditTestComponent],
  imports: [
    CommonModule
  ]
})
export class TestsModule { }
