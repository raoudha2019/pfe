import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilisateurService } from '../../service/utilisateur.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface UserData {
  id: number;
}
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  local_data:any;



  constructor(public dialogRef: MatDialogRef<UserDeleteComponent>,public translate: TranslateService,private _snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData,private utilisateurService: UtilisateurService) { 
      console.log(data);
      this.local_data = {...data};
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
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    this.utilisateurService.DeleteUser(this.local_data.id).subscribe((utilisateur) => {
      this.dialogRef.close();
    alert("vorte utilisateur est bien supprimé!");

   
    },     
    (error) => {
     alert("votre suprresion n'est pas effectuée!");

    });
  }
}