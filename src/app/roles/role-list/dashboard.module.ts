import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule,MatListModule, MatAutocompleteModule,MatSidenavModule,MatIconModule,MatDatepickerModule,MatNativeDateModule, MatRadioModule,MatCheckboxModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule,MatButtonModule, MatFormFieldModule,MatInputModule,MatRippleModule,MatTabsModule  } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DashboardComponent} from './dashboard.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule, MatDialog ,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import {QcmBtnComponent} from '../../qcm-btn/qcm-btn.component'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18/', '.json');
}


@NgModule({
  declarations: [ QcmBtnComponent,DashboardComponent ],
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
    
  ]
})
export class LayoutModule { }
