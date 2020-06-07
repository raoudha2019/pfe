import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Qcm1 } from '../../model/Qcm1';
import { TranslateService } from '@ngx-translate/core';
import {QcmService} from '../../service/qcm.service';
export interface RoleData {
  name: string;
  id: number;
  permissions: Qcm1;
}

@Component({
  selector: 'app-consult-test',
  templateUrl: './consult-test.component.html',
  styleUrls: ['./consult-test.component.css']
})
export class ConsultTestComponent implements OnInit {

  local_data:any;
  constructor(public translate: TranslateService,public dialogRef: MatDialogRef<ConsultTestComponent>,private permissionservice: QcmService,
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
