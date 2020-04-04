import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Permission } from '../../model/Permission';
import { TranslateService } from '@ngx-translate/core';
import {PermissionService} from '../../service/permission.service';

export interface RoleData {
  name: string;
  id: number;
  permissions: Permission;
}

@Component({
  selector: 'app-role-consulter',
  templateUrl: './role-consulter.component.html',
  styleUrls: ['./role-consulter.component.css']
})
export class RoleConsulterComponent implements OnInit {
  local_data:any;
  constructor(public translate: TranslateService,public dialogRef: MatDialogRef<RoleConsulterComponent>,private permissionservice: PermissionService,
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
  delete() {
    this.permissionservice.DeletePerm(this.local_data.id).subscribe((permission) => {
      this.dialogRef.close();
    alert("vorte perm est bien supprimé!");

   
    },     
    (error) => {
      //console.log("ERROR"+JSON.stringify(error))
     // alert(error._body)
    });
  }
}
