import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject, Optional } from '@angular/core';
import { RoleService } from '../../service/Role.service';
import { Permission } from '../../model/permission';
import { Role } from '../../model/Role';
import { MatTableDataSource, MatTable, MatPaginator, MatDialog } from '@angular/material';
import { RoleDeleteComponent } from '../role-delete/role-delete.component';
import { RoleAddComponent } from '../role-add/role-add.component';
import { RoleConsulterComponent } from '../role-consulter/role-consulter.component';
import { RoleEditComponent } from '../role-edit/role-edit.component'
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface RoleData {
  name: string;
  id: number;
  permissions: Array<Permission>;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roles: Role[];
  animal: string;
  name: string;
  id: Number;
  show: boolean = true;


  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'description', 'action'];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private roleservice: RoleService, public dialog: MatDialog, public translate: TranslateService,
    private changeDetectorRefs: ChangeDetectorRef) {

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



  openDialoge(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(RoleEditComponent, {
      width: '750px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

      this.refresh();
    });
  }

  ngOnInit() {
    this.refresh();
    this.roleservice.getAllRoles().subscribe(data => {
      this.dataSource.data = data;


    })
    this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.roleservice.getAllRoles().subscribe((res) => {
      this.dataSource.data = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
  openDialogedelete(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(RoleDeleteComponent, {

      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

      this.refresh();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RoleAddComponent, {
      width: '750px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



  openDialogeConsulter(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(RoleConsulterComponent, {

      width: '750px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

      this.refresh();
    });
  }
}