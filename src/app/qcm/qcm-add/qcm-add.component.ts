import { Component, OnInit, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatOption, MatSnackBar, MatTableDataSource, MatTable, MatPaginator, MatDialog } from '@angular/material';
import {Qcm1} from '../../model/Qcm1';
import {Question_Body} from '../../model/Question_Body';
import { ActivatedRoute } from '@angular/router';

import {Domain} from '../../model/Domain';
import { QcmService } from '../../service/qcm.service';
//import {DomainService} from '../../service/domain.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';
import { DomainService } from 'src/app/service/domain.service';
import { DeleteQcmComponent } from '../delete-qcm/delete-qcm.component';
import { UpdateQcmComponent } from '../update-qcm/update-qcm.component';
import { ConsultQcmComponent } from '../consult-qcm/consult-qcm.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-qcm-add',
  templateUrl: './qcm-add.component.html',
  styleUrls: ['./qcm-add.component.css']
})
export class QcmAddComponent implements OnInit {

  
  messageForm: FormGroup;
  local_data:any;
  submitted = false;
  success = false;
  domain :Domain = new Domain();
  qcm:Question_Body=new Question_Body;

  domaines: Domain[];
  searchUserForm: FormGroup;
  //actions: Action[];
  selectedValue: number;
  currentQcm: Qcm1;
  desQuestionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  levelControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
   Validators.pattern(/[0-9]/)

  ]);
  requiredTimeControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  subDomainControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  titleControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
 
  DomainControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  
  

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['domain','Sub_Domain','title','action'];
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  formControl: FormGroup;
   
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  dataLength: any;
  membersUrl: number;

  domain_id: number;

   
  constructor( private qcmService: QcmService,public translate: TranslateService,private snackBar: MatSnackBarComponent,
    public dialogRef: MatDialogRef<QcmAddComponent>,public dialog: MatDialog,private actRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private changeDetectorRefs: ChangeDetectorRef,
    private domainservice: DomainService,private fb: FormBuilder,private formBuilder: FormBuilder) 
     {   
      this.domain_id = this.actRoute.snapshot.params.id;
 
      //******************* */
      this.messageForm = this.formBuilder.group({
        desQuestion: ['', Validators.required],
       level: ['', Validators.required],
        status: ['', Validators.required],
       // requiredTime: ['', Validators.required],
       // domain: ['', Validators.required], 
        option1: ['', Validators.required], 
        option2: ['', Validators.required], 
        option3: ['', Validators.required], 

      }) 
  
console.log(data);
this.local_data = {...data};

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


onNoClick(): void {
this.dialogRef.close();
}

onSubmit(){

  this.qcmService.getbyDomain(this.selectedValue).subscribe(data => {
    this.local_data.data = data;
    console.log(data);
  })

  //******* */
  
    /* this.qcmService.getAllQcms().subscribe(data => {
       this.local_data.data = data;
   })
   //**********************getQcmByDomain */
   
   this.qcmService.getbyDomain(this.selectedValue).subscribe(data => {
     this.local_data.data = data;
     console.log(data);
     console.log(this.selectedValue);
   })
   
     //**********getDomain *************** */
     this.domainservice.getAllDomains().subscribe(data => {
       this.domaines = data;
   }) 
   //********** searchform ************ */
   this.searchUserForm = this.fb.group({
     userType: new FormControl('')
   });
   //*****affichagge***********
   this.refresh();
       this.qcmService.getbyDomain(this.selectedValue).subscribe(data => {
         this.dataSource.data = data;
     }) 
     this.dataSource.paginator = this.paginator;
     
   
   
   
}


ngOnInit() {
 /* this.qcmService.getAllQcms().subscribe(data => {
    this.local_data.data = data;
})
//**********************getQcmByDomain */

this.qcmService.getbyDomain(this.domain_id).subscribe(data => {
  this.local_data.data = data;
  console.log(data);
  console.log(this.selectedValue);
})

  //**********getDomain *************** */
  this.domainservice.getAllDomains().subscribe(data => {
    this.domaines = data;
}) 
//********** searchform ************ */
this.searchUserForm = this.fb.group({
  userType: new FormControl('')
});
//*****affichagge***********
this.refresh();
    this.qcmService.getbyDomain(this.domain_id).subscribe(data => {
      this.dataSource.data = data;
  }) 
  this.dataSource.paginator = this.paginator;
  


}
  refresh() {
  this.qcmService.getbyDomain(this.domain_id).subscribe((res) => {
    this.dataSource.data  = res;
    this.changeDetectorRefs.detectChanges();
  });
}
//******************** button click **********************/
/*onSubmit() {
this. qcm.domain=this.messageForm.value.domain;
this. qcm.desQuestion=this.messageForm.value.desQuestion;
this. qcm.level=this.messageForm.value.level;
this. qcm.requiredTime=this.messageForm.value.requiredTime;
this. qcm.status=this.messageForm.value.status;
this. qcm.option1=this.messageForm.value.option1;
this. qcm.option2=this.messageForm.value.option2;
this. qcm.option3=this.messageForm.value.option3;

console.log('1111111111');

this. qcmService.addQcm(this.messageForm.value,this.selectedValue).subscribe(data=>{
  console.log('117911111');

    //this.dialogRef.close();
    this.snackBar.openSnackBar("done!",'Close','red-snackbar');

  //alert("done")
   
},

(error) => {
//console.log("ERROR"+JSON.stringify(error))
//this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

alert(error._body)
});
}*/
//************************************************ */

openDialogedelete(action,obj) {
  obj.action = action;
  const dialogRef = this.dialog.open(DeleteQcmComponent, {
   
    data:obj
  });

  dialogRef.afterClosed().subscribe(result => {
    this.refresh();
  });  }
  openDialoge(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UpdateQcmComponent, {
      width: '750px',height:'450px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      
      this.refresh();
    });
  }
  
  openDialogeConsulter(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ConsultQcmComponent, {

      width: '750px', height:'450px',
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }

/// ******************reserch by domaines************
/*public searchDomaines(domaine): any {

  const url = `${this.membersUrl}/?domaine=${domaine}`;

  this.qcmService.searchDomaines(url)
    .subscribe(data => {
      this.dataLength = data.length;
      this.dataSource.data = data;
    });
}*/

}







