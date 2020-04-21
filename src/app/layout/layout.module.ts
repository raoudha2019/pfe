import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidbarComponent } from './sidbar/sidbar.component';
import {LayoutComponent} from '../layout/layout.component'
import {HeadersComponent} from './headers/headers.component'
import { MatStepperModule,MatListModule, MatAutocompleteModule,MatSidenavModule,MatIconModule,MatDatepickerModule,MatNativeDateModule, MatRadioModule,MatCheckboxModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule,MatButtonModule, MatFormFieldModule,MatInputModule,MatRippleModule,MatTabsModule  } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule, MatDialog ,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from '../roles/role-list/dashboard.component'

import { RoleDeleteComponent } from '../roles/role-delete/role-delete.component';
import { RoleAddComponent } from '../roles/role-add/role-add.component';
import { RoleConsulterComponent } from '../roles/role-consulter/role-consulter.component';
import { RoleEditComponent } from '../roles/role-edit/role-edit.component'
import { from } from 'rxjs';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
//import { EventEmitterService } from '../service/event-emitter.service';
//import { DataService } from '../service/dataservice';
import { CookieService } from 'ngx-cookie-service';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18/', '.json');
}


@NgModule({
  declarations: [SidbarComponent,LayoutComponent,HeadersComponent,RoleDeleteComponent,DashboardComponent,  RoleEditComponent,RoleConsulterComponent,RoleAddComponent,],
  imports: [
    CommonModule,
   
    RouterModule,
    MatSidenavModule,
    MatDividerModule,MatMenuModule,MatToolbarModule,
  
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    MatTabsModule ,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatStepperModule, 
    MatAutocompleteModule,
    MatListModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
   
    
  ],
  providers: [
    //EventEmitterService, DataService,CookieService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
],
})
export class LayoutModule { }
