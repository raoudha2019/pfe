import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Qcm1 } from 'src/app/model/Qcm1';
import { Test } from 'src/app/model/Test';
import { TestsService } from 'src/app/service/tests.service';
import { MatTableDataSource, MatTable, MatPaginator, MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { DeleteTestComponent } from '../delete-test/delete-test.component';
import { ConsultTestComponent } from '../consult-test/consult-test.component';
import {CreateFileComponent} from '../create-file/create-file.component';
import { EditTestComponent } from '../edit-test/edit-test.component';
export interface TestData {
  name: string;
  id: number;
  qcms: Array<Qcm1>;
}
@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  tests: Test[];
  animal: string;
  name: string;
  id: Number;
  show: boolean = true;


  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['title', 'status', 'max_nb_questions','time_limite','action'];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor( private testservice: TestsService, public dialog: MatDialog, public translate: TranslateService,
    private changeDetectorRefs: ChangeDetectorRef) {
 }
 
  ngOnInit() {
    this.refresh();
    this.testservice.getAllTests().subscribe(data => {
      this.dataSource.data = data;
console.log(this.dataSource.data);

    })
    this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.testservice.getAllTests().subscribe((res) => {
      this.dataSource.data = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
  
  

/*  openDialoge(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UserUpdateComponent, {
      width: '750px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      
      this.refresh();
    });
  }*/
  openDialogedelete(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DeleteTestComponent, {
     
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });  }

    openDialogefile(action,obj) {
      obj.action = action;
      const dialogRef = this.dialog.open(CreateFileComponent, {
       
        data:obj
      });
   
      dialogRef.afterClosed().subscribe(result => {
        this.refresh();
      });  }
      openDialoge(action,obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(EditTestComponent, {
    
          width: '750px', height:'450px',
          data:obj
        });
        dialogRef.afterClosed().subscribe(result => {
          this.refresh();
        });
      }
  openDialogeConsulter(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ConsultTestComponent, {

      width: '750px', height:'450px',
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
}
