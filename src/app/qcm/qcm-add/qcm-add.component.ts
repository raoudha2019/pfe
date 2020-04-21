import { Component, OnInit, ViewChild, Inject, ChangeDetectorRef, Optional } from '@angular/core';
//import {MatTableDataSource, MatTable} from '@angular/material/table'
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Qcm} from '../../model/Qcm';
import {Domain} from '../../model/Domain';
import { QcmService } from '../../service/qcm.service';
//import {DomainService} from '../../service/domain.service';



import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';
import { DomainService } from 'src/app/service/domain.service';
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
  qcm:Qcm=new Qcm;
  
  domaines: Domain[];

  searchUserForm: FormGroup;
  //actions: Action[];
  selectedValue: number;

  desQuestionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  levelControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  requiredTimeControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  statusControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  
  DomainControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  constructor( private qcmService: QcmService,public translate: TranslateService,private snackBar: MatSnackBarComponent,
    public dialogRef: MatDialogRef<QcmAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private domainservice: DomainService,private fb: FormBuilder,private formBuilder: FormBuilder) 
    {
      this.messageForm = this.formBuilder.group({
        desQuestion: ['', Validators.required],
        level: ['', Validators.required],
        status: ['', Validators.required],
        requiredTime: ['', Validators.required],
        domain: ['', Validators.required,
    // Validators.pattern(/[0-9a-zA-Z]{6,}/)
  ],
  
        //role: ['', Validators.required],
      
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

ngOnInit() {
/*

{
       
        this.utilisateurService.getAllUsers().subscribe(data => {
          this.local_data.data = data;
      })
       this.roleservice.getAllRoles().subscribe(data => {
          this.roles = data;
      }) 
      //*
*/

  //**********getRoles *************** */
  this.domainservice.getAllDomains().subscribe(data => {
    this.domaines = data;
}) 
//********** searchform ************ */
this.searchUserForm = this.fb.group({
  userType: new FormControl('')
});


//this.role.permissions = new Array<Permission>();
}

//*********************chek event ************* */



//******************** button click **********************/
onSubmit() {
//this. qcm.domain=this.messageForm.value.domain;
this. qcm.desQuestion=this.messageForm.value.desQuestion;
this. qcm.level=this.messageForm.value.level;
this. qcm.requiredTime=this.messageForm.value.requiredTime;
this. qcm.status=this.messageForm.value.status;

/*  if (this.messageForm.invalid  ) {
  return  console.log("error****");
}*/


this. qcmService.addQcm(this.messageForm.value,this.selectedValue).subscribe(data=>{
 
    //this.dialogRef.close();
    this.snackBar.openSnackBar("done!",'Close','red-snackbar');

  alert("done")
   
},

(error) => {
console.log("ERROR"+JSON.stringify(error))
this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

alert(error._body)
});
}}