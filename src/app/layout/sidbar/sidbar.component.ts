  
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Utilisateur } from '../../model/Utilisateur';
import { AuthenticationService } from '../../service/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {Role} from '../../model/Role';
import { RoleConsulterComponent } from 'src/app/roles/role-consulter/role-consulter.component';

export interface RoleData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {

  
  //****************Variables **************** */
  animal: string;
  name: string;
  currentUser: Utilisateur;
  ActionRole = false;
  ActionEmploye = false;
  ActionUser=false;
  ActionMicro=false;
  ActionClient=false;


//***************************Constructor ********** */
constructor(public dialog: MatDialog,public translate: TranslateService,private router: Router,
  private authenticationService: AuthenticationService){
    translate.addLangs(['en', 'fr']);  
    if (localStorage.getItem('locale')) {  
      const browserLang = localStorage.getItem('locale');  
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  
    } else {  
      localStorage.setItem('locale', 'en');  
      translate.setDefaultLang('en');  
    } 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

 changeLang(language: string) {  
  localStorage.setItem('locale', language);  
  this.translate.use(language);  
} 
openDialog(): void {
  const dialogRef = this.dialog.open(RoleConsulterComponent,{
    width: '750px',
  data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
  
    console.log('The dialog was closed');
    
  });
}
  ngOnInit() {
    /*if(this.currentUser.role!=null){
    for (let permission of this.currentUser.role.permissions) {

      if ( permission.name == "Ajouter Role" || permission.name == "Supprimer Role" || permission.name == "Modifier Role" || permission.name == "Consulter Role") {
        this.ActionRole = true;          
      }
    }
  }
*/
}

}
