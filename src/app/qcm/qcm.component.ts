import { Component, OnInit, Inject } from '@angular/core';
import { AddDomainComponent, DialogData } from '../domain/add-domain/add-domain.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Domain } from '../model/Domain';
import {DomainService} from '../service/domain.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {
  domaines: Domain[];
 
  local_data: any;

  constructor( public domainservice:DomainService ,public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data1: DialogData,) {
    //domaines
    console.log(data1);
    this.local_data = {...data1};
   }

  ngOnInit() {
    this.domainservice.getAllDomains().subscribe(data1 => {
      this.domaines = data1;
  }) 

    
}
  
  openDialoge(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddDomainComponent, {
      width: '750px',
      data:obj
    });
}}
