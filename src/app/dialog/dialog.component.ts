import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';
//import { DialogData } from '../roles/role-add/role-add.component';
import styleObj from './style';
export interface DialogData {
  animal: string;
  name: string;
}
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  styleElement = null;
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,private el: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
    this.dialogRef.close( );
  }
  name = 'Angular';
  animal: string;

  mode = 'editor';
  content = 'Test';
  content1 = 'Animal.data';

    preRenderFunc(c: string) {
      return c ? c.replace(/something/g, 'new value') : ''; // must return a string
    }










  ngOnInit() {
  }
  changeStyle() {
    let style: string = styleObj.replace('--color','#'+Math.floor(Math.random()*16777215).toString(16));
    this.createStyle(style);
  }

  createStyle(style: string): void {
    if(this.styleElement){
      this.styleElement.removeChild(this.styleElement.firstChild);
    } else {
      this.styleElement = document.createElement('style');
    }
    this.styleElement.appendChild(document.createTextNode(style));
    this.el.nativeElement.appendChild(this.styleElement);
  }













}
