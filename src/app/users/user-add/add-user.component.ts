import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatOption, MatSnackBar } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActionService } from '../../service/action.service';
import { RoleService } from '../../service/Role.service';
import { Action } from '../../model/Action';
import { Role } from '../../model/Role';
import { Permission } from '../../model/Permission';
import { Utilisateur} from '../../model/Utilisateur';
import { UtilisateurService } from '../../service/utilisateur.service';
import { TranslateService } from '@ngx-translate/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  messageForm: FormGroup;
  local_data:any;
  submitted = false;
  success = false;
  role: Role = new Role();
  util:Utilisateur=new Utilisateur();
  listpriv = new Array<Permission>();
  roles: Role[];
  searchUserForm: FormGroup;
  actions: Action[];
  selectedValue: number;

  firstnameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  PermissionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  lastnameControl = new FormControl('', [
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
  constructor( private utilisateurService: UtilisateurService,public translate: TranslateService,private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private actionservice: ActionService,
    private roleservice: RoleService,private fb: FormBuilder,private formBuilder: FormBuilder) 
    {
      this.messageForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required,
    // Validators.pattern(/[0-9a-zA-Z]{6,}/)
  ],
  
        role: ['', Validators.required],
      
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

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
    
      ngOnInit() {
       
        this.utilisateurService.getAllUsers().subscribe(data => {
          this.local_data.data = data;
      })

        //**********getRoles *************** */
        this.roleservice.getAllRoles().subscribe(data => {
          this.roles = data;
      }) 
      //********** searchform ************ */
      this.searchUserForm = this.fb.group({
        userType: new FormControl('')
      });
    
    
      this.role.permissions = new Array<Permission>();
      }
    
      //*********************chek event ************* */
    
    
    
     //******************** button click **********************/
     onSubmit() {

      this.util.firstname=this.messageForm.value.firstname;
      this.util.lastname=this.messageForm.value.lastname;
      this.util.email=this.messageForm.value.email;
      this.util.password=this.messageForm.value.password;

    /*  if (this.messageForm.invalid  ) {
        return  console.log("error****");
      }*/
    
  
      this.utilisateurService.AddUser(this.messageForm.value,this.selectedValue).subscribe(data=>{
       
          this.dialogRef.close();
          alert("done")
         
    },

    (error) => {
      console.log("ERROR"+JSON.stringify(error))
      alert(error._body)
    });
  }


     }
      


