import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Role } from '../../model/Role';
import {Permission} from '../../model/Permission';
import { PermissionService } from '../../service/permission.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../service/authentification.service';

export interface RoleData {
  name: string;
  id: number;
  roles: Role;
  permissions: Permission;
}
@Component({
  selector: 'app-user-consulter',
  templateUrl: './user-consulter.component.html',
  styleUrls: ['./user-consulter.component.css']
})
export class UserConsulterComponent implements OnInit {

  local_data:any;
  constructor(private authenticationService: AuthenticationService,public translate: TranslateService, public dialogRef: MatDialogRef<UserConsulterComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: RoleData) { 
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
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}


