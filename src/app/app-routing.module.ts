import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component'
import { DashboardComponent } from './roles/role-list/dashboard.component';

import { RoleDeleteComponent } from './roles/role-delete/role-delete.component';
import { RoleConsulterComponent } from './roles/role-consulter/role-consulter.component';
import { RoleAddComponent } from './roles/role-add/role-add.component';
import { RoleEditComponent} from './roles/role-edit/role-edit.component';
import {LoginComponent}from './login/login.component';
import {UserComponent} from './users/user/user.component';
import {DashComponent} from './dash/dash.component';
import {DialogComponent} from './dialog/dialog.component';
import {AddUserComponent} from './users/user-add/add-user.component';
import {UserDeleteComponent} from './users/user-delete/user-delete.component';
import {UserUpdateComponent} from './users/user-update/user-update.component';
import {UserConsulterComponent} from './users/user-consulter/user-consulter.component';

import { from } from 'rxjs';
const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch:'full'},

  {path:'login', component: LoginComponent},

  
  { path: '',
    component: LayoutComponent,
    children: [
  {path:'delete-role' , component:RoleDeleteComponent },
  {path:'consulter-role' , component:RoleConsulterComponent },
  {path:'add-role' , component:RoleAddComponent },
  {path:'edit-role' , component:RoleEditComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'User',component:UserComponent},
  {path:'dash', component: DashComponent},
  {path:'dialog', component: DialogComponent},
  {path:'add',component:AddUserComponent},
  {path:'del',component:UserDeleteComponent},
  {path:'update',component:UserUpdateComponent},
  {path:'consult',component:UserConsulterComponent},

]

    } 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
