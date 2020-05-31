import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, AbstractControl} from '@angular/forms';
import {MatChipInputEvent, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { QcmService } from '../service/qcm.service';
import { TranslateService } from '@ngx-translate/core';
import { Response } from '../model/Response';
import {Question_Body} from '../model/Question_Body';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  selectedValue: number;
  listrep = new Array<Response>();
 animal1: string;
 name0: any;
  name1: any;
  name2: JSON;
  name3:JSON;
  name4:any;
  snackBar: any;

  
  constructor(
    private fb: FormBuilder, private qcmService: QcmService,public dialog: MatDialog,public translate: TranslateService,
    public dialogRef: MatDialogRef<TestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

onNoClick(): void {
  this.dialogRef.close();
 
}
  

}

  
  
