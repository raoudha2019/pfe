import { Component, OnInit, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table'
import { RoleService } from '../../service/Role.service';
import { MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Role } from '../../model/Role';
import { Permission } from '../../model/Permission';
import { UtilisateurService } from '../../service/utilisateur.service';
import { Utilisateur } from '../../model/Utilisateur';
import { AuthenticationService } from '../../service/authentification.service';
import { AddUserComponent } from '../user-add/add-user.component';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { UserConsulterComponent } from '../user-consulter/user-consulter.component';
import { TranslateService } from '@ngx-translate/core';

//import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface RoleData {
  name: string;
  id: number;
   permissions: Array< Permission>;
}

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  roles: Role[];
  animal: string;
  name: string;
  id: Number;
  show: boolean = true;
  currentUser: Utilisateur;
  
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['firstname','lastname','email','role','action'];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private authenticationService: AuthenticationService,public translate: TranslateService, private utilisateurService: UtilisateurService,private roleservice: 
    RoleService,public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) { 
    
      translate.addLangs(['en', 'fr']);  
      if (localStorage.getItem('locale')) {  
        const browserLang = localStorage.getItem('locale');  
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  
      } else {  
        localStorage.setItem('locale', 'en');  
        translate.setDefaultLang('en');  
      } 
      //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

     changeLang(language: string) {  
      localStorage.setItem('locale', language);  
      this.translate.use(language);  
    } 
 
  ngOnInit() {
    this.refresh();
    this.utilisateurService.getAllUsers().subscribe(data => {
      this.dataSource.data = data;
  }) 
  this.dataSource.paginator = this.paginator;
  
}
  
  refresh() {
    this.utilisateurService.getAllUsers().subscribe((res) => {
      this.dataSource.data  = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent,{
      width: '750px',
    data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
      console.log('The dialog was closed');
      
    });
  }
  openDialogedelete(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UserDeleteComponent, {
     
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });  }

  openDialoge(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UserUpdateComponent, {
      width: '750px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      
      this.refresh();
    });
  }
  
  openDialogeConsulter(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UserConsulterComponent, {

      width: '750px',
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
}