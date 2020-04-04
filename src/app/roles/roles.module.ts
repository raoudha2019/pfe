import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RoleAddComponent}from './role-add/role-add.component';
import {RoleConsulterComponent} from './role-consulter/role-consulter.component';
import {RoleDeleteComponent} from './role-delete/role-delete.component';
import {RoleEditComponent} from './role-edit/role-edit.component';
import {DashboardComponent} from './role-list/dashboard.component';
import {SelectCheckAllComponent} from './role-add/select-check-all.component';
import { from } from 'rxjs';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  
    SelectCheckAllComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    RoleAddComponent,
    RoleConsulterComponent,
    RoleDeleteComponent,
    RoleEditComponent,
    DashboardComponent,
  ]
})
export class RolesModule { }
