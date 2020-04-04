import { Component, OnInit, Inject, ViewChild, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatOption, MatSnackBar } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActionService } from '../../service/action.service';
import { RoleService } from '../../service/Role.service';
import { Role } from '../../model/Role';
import { Utilisateur} from '../../model/Utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../service/utilisateur.service';
import { Action } from '../../model/action';
import { Permission } from '../../model/permission';
import { TranslateService } from '@ngx-translate/core';

export interface RoleData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  messageForm: FormGroup;
  local_data:any;
  submitted = false;
  success = false;
  role: Role = new Role();
  listpriv = new Array<Permission>();
  roles: Role;
  searchUserForm: FormGroup;
  actions: Action[];
  selectedValue: Role;
  
  utii: Utilisateur = new Utilisateur();
 

 firstnameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  
  
  lastnameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);

  PermissionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  emailControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
 
  RoleControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  hide = true;
constructor( private utilisateurService: UtilisateurService,
  public translate: TranslateService,private _snackBar: MatSnackBar,
  public dialogRef: MatDialogRef<UserUpdateComponent>,
  @Inject(MAT_DIALOG_DATA) public data: RoleData,private utilisateurservice: UtilisateurService ,
  private roleservice: RoleService,
  private fb: FormBuilder,private formBuilder: FormBuilder) 
{
      this.messageForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],
      
      })


      // ******************data of selected row**************** 
      
    
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

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
 

  onSubmit() {
     
   this.utii.role= this.selectedValue;
   this.utii.firstname=this.messageForm.value.firstname;
    this.utii.lastname=this.messageForm.value.lastname;
    this.utii.email=this.messageForm.value.email;
    this.utii.password=this.messageForm.value.password;
  //  this.utii.role=this.messageForm.value.Role;
      if (this.messageForm.invalid ||this.role == null) {
      //  alert("veuillez remplir1258 les champs obligatoires");
           console.log("********")        }
    
    this.utilisateurService.UpdateUsers(this.utii,this.local_data.id).subscribe((role) => {
      
      this.dialogRef.close();
      alert("done!")
     // alert("vorte utilisateur est bien modifié!");

    },     
    (error) => {
      console.log("ERROR"+JSON.stringify(error))
      alert(error._body);    });
  }
  ngOnInit() {
    //**********getRoles *************** */
    this.roleservice.getAllRoles().subscribe(data => {
     this.roles = data;
 }) 
 // ********* searchform ************ 
 this.searchUserForm = this.fb.group({
   userType: new FormControl('')
 });

 }
}
    
      

   


  

  


