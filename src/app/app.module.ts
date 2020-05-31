import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module'
import {LoginComponent} from './login/login.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpModule } from '@angular/http';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IconsModule } from 'angular-bootstrap-md';
import { from } from 'rxjs';
import { UserComponent } from './users/user/user.component';
import { DashComponent } from './dash/dash.component';
import { DialogComponent } from './dialog/dialog.component';
import { QcmBtnComponent } from './qcm-btn/qcm-btn.component';
import { AddUserComponent } from './users/user-add/add-user.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UserConsulterComponent } from './users/user-consulter/user-consulter.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SelectCheckAllComponent}from './roles/role-add/select-check-all.component';
import { PermissionService } from './service/permission.service';
import { CookieService } from 'ngx-cookie-service';
import { QcmComponent } from './qcm/qcm.component';
import {QcmAddComponent} from './qcm/qcm-add/qcm-add.component';
import {DomaineComponent} from './qcm/domaine/domaine.component';
import{DeleteQcmComponent} from './qcm/delete-qcm/delete-qcm.component';
import {ConsultQcmComponent} from './qcm/consult-qcm/consult-qcm.component';
import {UpdateQcmComponent} from './qcm/update-qcm/update-qcm.component';
import {AddDomainComponent} from './domain/add-domain/add-domain.component';
//import { PizzaPartyComponent } from './snack-bar-component-example-snack/snack-bar-component-example-snack.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTreeModule} from '@angular/material/tree';
//import { NgxTinymceModule } from '@tinymce/tinymce-angular';
import { NgxTinymceModule } from 'ngx-tinymce';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import {AddtestComponent} from './tests/addtest/addtest.component';
import { MatSnackBarComponent } from './mat-snack-bar/mat-snack-bar.component';
import { TestComponent } from './test/test.component';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    SelectCheckAllComponent,AddDomainComponent,
    MatSnackBarComponent,
    LoginComponent,
    UserComponent,TestComponent,
    DashComponent,
    DialogComponent,
    QcmBtnComponent,
    AddUserComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    UserConsulterComponent,
    MatSnackBarComponent,
    QcmComponent,DomaineComponent,
    QcmAddComponent,AddtestComponent,
    DeleteQcmComponent,ConsultQcmComponent,UpdateQcmComponent, TestComponent,
      
  ],
  imports: [  HttpClientModule, MatSnackBarModule,
    BrowserModule,RouterModule,FormsModule, ReactiveFormsModule,
    AppRoutingModule,LayoutModule,
    BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,BrowserModule,
    MatCheckboxModule,LMarkdownEditorModule,
    MatCheckboxModule,DragDropModule,
    MatButtonModule,MatTreeModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,  NgxTinymceModule.forRoot({
     // baseURL: './assets/tinymce/',
      // or cdn
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/'
    }),
    MatSortModule,
    MatPaginatorModule,MatDialogModule,RichTextEditorAllModule,
    WavesModule, 
    HttpModule,HttpClientModule,NavbarModule, WavesModule, ButtonsModule,IconsModule,MatSidenavModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MatSnackBarComponent,
     ],
  exports: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
