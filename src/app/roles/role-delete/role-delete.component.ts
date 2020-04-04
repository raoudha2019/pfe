import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoleService } from '../../service/Role.service';
import { TranslateService } from '@ngx-translate/core';

export interface RoleData {
  id: number;
}
@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.css']
})
export class RoleDeleteComponent implements OnInit {
  local_data:any;



  constructor(public translate: TranslateService,public dialogRef: MatDialogRef<RoleDeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: RoleData,private roleservice: RoleService) { 
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
    this.roleservice.DeleteRole(this.local_data.id).subscribe((role) => {
      this.dialogRef.close();
    alert("vorte role est bien supprimé!");

   
    },     
    (error) => {
      console.log("ERROR"+JSON.stringify(error))
      alert(error._body)
    });
  }




}
