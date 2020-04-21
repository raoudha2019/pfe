import { Component, OnInit, Inject, ViewChild, ɵLOCALE_DATA, Optional } from '@angular/core';
import {

  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, MatOption, MatDialog, MatSnackBar, } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder, NgModel } from '@angular/forms';
import { ActionService } from '../../service/action.service';
import { RoleService } from '../../service/Role.service';
import { Action } from '../../model/Action';
import { Role } from '../../model/Role';
import { Permission } from '../../model/Permission';
import { DialogComponent } from '../../dialog/dialog.component';
import { Local } from 'protractor/built/driverProviders';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import {MatSnackBarComponent} from '../../mat-snack-bar/mat-snack-bar.component';
export interface DialogData {
  name: string;
  id: number;
  permissions: Permission;
}





@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;

  messageForm: FormGroup;
  submitted = false;
  success = false;
  role: Role = new Role();
  listperm = new Array<Permission>();
  permissionsList = [];
  local_data:any;
  searchUserForm: FormGroup;
  actions: Action[];

  nomControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  PermissionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  descriptionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  actionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);


  

  constructor(public dialog: MatDialog,public translate: TranslateService,
    public dialogRef: MatDialogRef<RoleAddComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA)
     public data: DialogData,private actionservice: ActionService,
     private roleservice: RoleService,private fb: FormBuilder,private snackBar: MatSnackBarComponent,
     private formBuilder: FormBuilder) 

    {
      console.log(data);
      this.local_data = {...data};
      

      this.messageForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
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
    selectAll(select: NgModel, values, array) {
      select.update.emit(values); 
    }
  
    deselectAll(select: NgModel) {
      select.update.emit([]); 
    }

  ngOnInit() {

    //**********getPermissionGroup *************** */
    this.actionservice.getActions().subscribe(data => {
      this.actions = data;
      for (let action of this.actions) {

        this.actionservice.getActionPermissions(action.id).subscribe((Permission) => {
          action.permisssions = Permission;
        });
      }
  })
  this.listperm=this.permissionsList;

  //********** searchform ************ */
  this.searchUserForm = this.fb.group({
    userType: new FormControl('')
  });


  this.role.permissions = new Array<Permission>();
  }

  //*********************chek event ************* */
  check(event, selected: boolean, i,j){
    if(selected=true && selected!=false){
      this.actions[i].permisssions[j]["selected"] = true;
    }
    else {
      this.actions[i].permisssions[j]["selected"] = false;
      }

   if(this.actions[i].permisssions[j]["selected"] = true && this.actions[i].permisssions[j]["selected"] != false){
  this.listperm.push(this.actions[i].permisssions[j]); 
  return  console.log("hhh");

}
 }
 


 //******************** button click **********************/
  onSubmit() {
    this.role.permissions=[] ;
      for (let x in this.listperm) {
        if (this.listperm[x]["selected"] == true ) {
          this.role.permissions.push(this.listperm[x]);
        }
      }
      this.role.name=this.messageForm.value.name;
      this.role.description=this.messageForm.value.description;
       console.log(this.role.permissions);
    if (this.messageForm.invalid || this.role.permissions.length == 0 ) {
     // return  console.log(this.local_data);
     // alert("tt les champs sont obligatoire!!");

    } 
   
    
    console.log("aaaaa"); 
   this.roleservice.addRole(this.role).subscribe((role) => {
      this.dialogRef.close();
    // console.log("done")
    // alert("successful operation!");
    this.snackBar.openSnackBar("done!",'Close','red-snackbar');

    },     
    (error) => {
      console.log("ERROR"+JSON.stringify(error))
    // alert(error._body)
   // alert(error._body['message'])
   this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

    });
    
}


  closeDialog1(){
    this.dialogRef.close({event:'Cancel'});
  }
//**************************dialog */
  
openDialog1(): void {
  const dialogRef = this.dialog.open(DialogComponent,{
    width: '750px',

  });

  dialogRef.afterClosed().subscribe(result => {
 
    console.log('The dialog was closed');
    
  });
}
}