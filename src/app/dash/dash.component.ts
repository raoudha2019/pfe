import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Utilisateur } from '../model/Utilisateur';

import { AuthenticationService } from '../service/authentification.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html', 
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  currentUser: Utilisateur;
  ActionRole = false;
  ActionUtilisateur = false;

  

 //***************************Constructor ********** */
 constructor(public dialog: MatDialog,public translate: TranslateService,private router: Router,
  private authenticationService: AuthenticationService) {
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
 
    ngOnInit() {
   }
    } 
