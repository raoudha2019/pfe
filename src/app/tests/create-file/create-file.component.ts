import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TestsService } from 'src/app/service/tests.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';
export interface UserData {
  id: number;
}
@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.css']
})
export class CreateFileComponent implements OnInit {

  local_data:any;



  constructor(public dialogRef: MatDialogRef<CreateFileComponent>,public translate: TranslateService,
    private snackBar: MatSnackBarComponent,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData,private testService: TestsService) { 
      console.log(data);
      this.local_data = {...data};}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  create() {
    this.testService.createFile(this.local_data).subscribe((test) => {
      this.dialogRef.close();
    this.snackBar.openSnackBar("Test exporté",'Close','red-snackbar');

   
    },     
    (error) => {
     alert("Echec!");
   // this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

    });
  }
}
