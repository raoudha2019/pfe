import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilisateurService } from '../../service/utilisateur.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';
import { TestsService } from 'src/app/service/tests.service';

export interface UserData {
  id: number;
}
@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit {

  local_data:any;



  constructor(public dialogRef: MatDialogRef<DeleteTestComponent>,public translate: TranslateService,private snackBar: MatSnackBarComponent,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData,private utilisateurService: TestsService) { 
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
    this.utilisateurService.DeleteTest(this.local_data.id).subscribe((utilisateur) => {
      this.dialogRef.close();
    //alert("vorte utilisateur est bien supprimé!");
    this.snackBar.openSnackBar("Test supprimé",'Close','red-snackbar');

   
    },     
    (error) => {
     alert("Echec de suppression!");
   // this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

    });
  }
}
