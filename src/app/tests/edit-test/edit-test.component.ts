import { Component, OnInit, Inject, ViewChild, ɵLOCALE_DATA, Optional } from '@angular/core';
import {MatSnackBarConfig,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} 
from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, MatOption, MatDialog, MatSnackBar, } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder, NgModel } from '@angular/forms';

import { Domain } from '../../model/Domain';
//import { DialogComponent } from '../../dialog/dialog.component';
import { Local } from 'protractor/built/driverProviders';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import {MatSnackBarComponent} from '../../mat-snack-bar/mat-snack-bar.component';
import { Test } from 'src/app/model/Test';
import { TestsService } from 'src/app/service/tests.service';
import { Qcm1 } from 'src/app/model/Qcm1';

import { DomainService } from 'src/app/service/domain.service';
import { QcmService } from 'src/app/service/qcm.service';
export interface DialogData {
  name: string;
  id: number;
  qcms: Qcm1;
}
@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {
  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  messageForm: FormGroup;
 
  submitted = false;
  success = false;
  role: Test = new Test();
  listperm = new Array<Qcm1>();
  listperm1 = new Array<Domain>();
  domain: boolean = true;
  qcmsList = [];
  list1=[];
  local_data:any;
  searchUserForm: FormGroup;
  domains: Domain[];
  qcm_js:Qcm1[]
  //domain: any;
  testData :any =  { qcm_js:[] }; 

  titleControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  PermissionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  statusControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  max_nb_questionsControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  time_limiteControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  actionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  dialogRef: any;
 

  

  constructor(public dialog: MatDialog,public translate: TranslateService,
    //public dialogRef: MatDialogRef<RoleAddComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA)
     public data: DialogData,private domainservice: DomainService, private QcmService: QcmService,
     private testservice: TestsService,private fb: FormBuilder,private snackBar: MatSnackBarComponent,
     private formBuilder: FormBuilder) 

    {
    //  console.log(data);
      this.local_data = {...data};
      this.domain= this.local_data.domain;
      this.messageForm = this.formBuilder.group({
        title: ['', Validators.required],
        status: ['', Validators.required],
        max_nb_questions: ['',Validators.required],
        time_limite:['',Validators.required],
      })



      translate.get('Modifier',);



      translate.addLangs(['en', 'fr']);  
      if (localStorage.getItem('locale')) {  
        const browserLang = localStorage.getItem('locale');  
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  
      } else {  
        localStorage.setItem('locale', 'en');  
        translate.setDefaultLang('en');  
      }  
    }
    changeLang(language: string) {  
      localStorage.setItem('locale', language);  
      this.translate.use(language);  
    } 
   /* openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
*/

    ngOnInit() {
      this.domainservice.getAllDomains().subscribe(data1 => {
        this.domains = data1;
    console.log(this.domains);
  
   // for (let ii = 0; ii <this.domains.length; ii++) {
for (let domain of this.domains ){
      //console.log(this.domains[i].name)
      if(domain.id==1){
        // this.QcmService.getAllQcms().subscribe(data =>{
       //   for (let ii = 0; ii <this.domains.length; ii++) {
            
         this.QcmService.getbyDomain(domain.id).subscribe(data =>{
            this.qcmsList = data;
            console.log(this.qcmsList,11111111);
              console.log(this.list1,"list1")
          })

  }  }});
  this.listperm=this.qcmsList;
  //this.qcms = new Array<Qcm1>();
  
    this.QcmService.getAllQcms().subscribe(data => {
      this.qcm_js = data;
  //console.log(this.qcm_js);
 
   
    }
 )
 this.role.qcm_js = new Array<Qcm1>();
  }

  //*********************chek event ************* */
  check(event, selected: boolean, i,j){
    if(selected=true && selected!=false){
      this.qcmsList[j]["selected"] = true;
    }
    else {
      this.qcmsList[j]["selected"] = false;
      }

   if(this.qcmsList[j]["selected"] = true && this.qcmsList[j]["selected"] != false){
  this.listperm.push(this.qcmsList[j]); 
  return  console.log("hhh");

}
 }
 


 onSubmit() {
  this.role.qcm_js=[] ;
    for (let x in this.listperm) {
      if (this.listperm[x]["selected"] == true ) {
        this.role.qcm_js.push(this.listperm[x]);
      }
    }
    this.role.title=this.messageForm.value.title;
    this.role.status=this.messageForm.value.status;
    this.role.max_nb_questions=this.messageForm.value.max_nb_questions;
    this.role.time_limite=this.messageForm.value.time_limite;

     console.log(this.role.qcm_js);
  if (this.messageForm.invalid || this.role.qcm_js.length == 0 ) {
   alert("tt les champs sont obligatoire!!");

  } 
 
  
  console.log("aaaaa"); 
 this.testservice.UpdateTest(this.role,this.local_data.id).subscribe((role) => {
   
  this.snackBar.openSnackBar("done!",'Close','red-snackbar');

  },     
  (error) => {
    console.log("ERROR"+JSON.stringify(error))
   alert(error._body)
 //this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

  });
  
}

closeDialog(){
  this.dialogRef.close({event:'Cancel'});
}
}