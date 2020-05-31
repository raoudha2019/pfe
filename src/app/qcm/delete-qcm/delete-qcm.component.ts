import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {QcmService } from '../../service/qcm.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';

export interface UserData {
  id: number;
}
@Component({
  selector: 'app-delete-qcm',
  templateUrl: './delete-qcm.component.html',
  styleUrls: ['./delete-qcm.component.css']
})
export class DeleteQcmComponent implements OnInit {

  local_data:any;



  constructor(public dialogRef: MatDialogRef<DeleteQcmComponent>,public translate: TranslateService,private snackBar: MatSnackBarComponent,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData,private utilisateurService: QcmService) { 
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

   
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    this.utilisateurService.DeleteQcm(this.local_data.id).subscribe((qcm) => {
      this.dialogRef.close();
    //alert("vorte utilisateur est bien supprimé!");
    this.snackBar.openSnackBar("done",'Close','red-snackbar');

   
    },     
    (error) => {
    // alert("votre suprresion n'est pas effectuée!");
    this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

    });
  }
}