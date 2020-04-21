import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserUpdateComponent} from './user-update/user-update.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {AddUserComponent} from './user-add/add-user.component';
import {UserComponent} from './user/user.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,UserUpdateComponent,
    UserDeleteComponent,
    UserComponent,
    AddUserComponent,
  ]
})
export class UsersModule { }
