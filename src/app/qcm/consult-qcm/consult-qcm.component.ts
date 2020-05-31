import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';
import { Role } from '../../model/Role';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../service/authentification.service';
import { QcmService } from 'src/app/service/qcm.service';
import { Qcm } from 'src/app/model/Qcm';
export interface RoleData {
  name: string;
  id: number;
  roles: Role;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-consult-qcm',
  templateUrl: './consult-qcm.component.html',
  styleUrls: ['./consult-qcm.component.css']
})
export class ConsultQcmComponent implements OnInit {
  local_data:any;
  utilisateur: Qcm = new Qcm();
  id: number;
  selectedItem: any = '1';
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
  constructor(private authenticationService: AuthenticationService,
    private utilisateurService: QcmService,
    public translate: TranslateService, public dialogRef: MatDialogRef<ConsultQcmComponent>,
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
   /*this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.utilisateurService.GetUser(this.id).subscribe(
        (utilisateur) => {
          this.utilisateur = utilisateur;
  });});
  */
  }
  onNoClick(): void {
    this.dialogRef.close();
  }}

