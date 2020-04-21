import { Component, OnInit, Inject, ViewChild, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatOption } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActionService } from '../../service/action.service';
import { RoleService } from '../../service/Role.service';
import { Action } from '../../model/Action';
import { Role } from '../../model/Role';
import { Permission } from '../../model/Permission';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../../dialog/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';


export interface RoleData {
  name: string;
  id: number;
  permissions: Permission;
}

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
  
  list=new Array<Permission>();
  messageForm: FormGroup;
  submitted = false;
  success = false;
  role: Role = new Role();
  listperm = new Array<Permission>();
  selected : Permission;
  searchUserForm: FormGroup;
  actions: Action[];
  id: number;
  permissionsList = [];
  test = false;

//********************control ************* */
  nomControl = new FormControl('', [
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
  dialog: any;
  constructor(public translate: TranslateService,private route: ActivatedRoute,private _router: Router,private snackBar: MatSnackBarComponent,
    public dialogRef: MatDialogRef<RoleEditComponent>,

    @Optional() @Inject(MAT_DIALOG_DATA) public data: RoleData,
    private actionservice: ActionService,private roleservice: RoleService,private fb: FormBuilder,
    private formBuilder: FormBuilder) 
    {
      this.messageForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      permissionsList: [this.permissionsList]
      })



      //*******************data of selected row**************** */
      
    
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
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
    //**********getAction *************** */
    this.actionservice.getActions().subscribe(data => {
      this.actions = data;
      for (let action of this.actions) {

        this.actionservice.getActionPermissions(action.id).subscribe((permission) => {
          action.permisssions = permission;
         
        });

       
      }
  })



  //********Preselection Permissions *************** */
  
  this.actionservice.getActions().subscribe(data => {
    this.actions = data;
  for (let action of this.actions) { 
    this.actionservice.getActionPermissions(action.id).subscribe((permission) => {
      action.permisssions = permission;
      for (let el in action.permisssions) {       
         this.test = false;
        for (let x in  this.local_data.permissions) {
          if ( this.local_data.permissions[x].id == action.permisssions[el].id) {
            this.test = true;          
          }
        }
        if (this.test == true) {
          action.permisssions[el]["selected"] = true; 
          this.permissionsList.push(action.permisssions[el])
         
        }  
      }
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
}
 }

//******************sectionner tt */
checkAll(event, i,j) {
  if (event.target.checked == true) {
    this.check[i] = true;

    for (let el in this.actions[i].permisssions[j]) {
      this.actions[i].permisssions[el]["checked"] = true;
       this.role.permissions.length==0 
    }

 
  }
  else {
    this.check[i] = false;
    this.actions[i].numberPermission = 0 ;
    for (let el in this.actions[i].permisssions[j]) {
      this.actions[i].permisssions[el]["checked"] = false;
       
    }

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
    if (this.messageForm.invalid || this.role.permissions.length==0 ) {
     // return  console.log("error");
    }
  
   
    else{
    this.roleservice.UpdateRole(this.role,this.local_data.id).subscribe((role) => {
      this.dialogRef.close();
      this.snackBar.openSnackBar("done!",'Close','red-snackbar');

    //  alert("successful operation!")
    },     
    (error) => {
      console.log("ERROR"+JSON.stringify(error))
      this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

      //alert(error._body)
    });
  }
 }


 //******************************* */ 
  action:string;
  local_data:any;

    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
   
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }
//***************************************
openDialog1(): void {
  const dialogRef = this.dialog.open(DialogComponent,{
    width: '750px',

  });

  dialogRef.afterClosed().subscribe(result => {
 
    console.log('The dialog was closed');
    
  });
}

}