import {Input, Component, OnInit,Output, EventEmitter } from '@angular/core';
import {UtilisateurService} from '../service/utilisateur.service';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  
import { AuthenticationService } from '../service/authentification.service';
import { first } from 'rxjs/operators';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  messageForm: FormGroup;
  submitted = false;
  success = false;
  
  
  usernameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  PasswordControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  constructor(private formBuilder: FormBuilder,private snackBar: MatSnackBarComponent,
    private service: UtilisateurService,
    private router : Router,public translate: TranslateService,
    private authenticationService: AuthenticationService) { 
   //****************** FormmBuilder ****************/
      this.messageForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],    
   })

   //******************* Partie Translate **********/
   translate.addLangs(['en', 'fr']);  
    if (localStorage.getItem('locale')) {  
      const browserLang = localStorage.getItem('locale');  
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  
    } else {  
      localStorage.setItem('locale', 'en');  
      translate.setDefaultLang('en');  
    }  
    //*************************** authenticationService*****************/
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(["dash"]);
  }
  
   
 }

 
 changeLang(language: string) {  
  localStorage.setItem('locale', language);  
  this.translate.use(language);  
} 

 redirecttt(){
  setTimeout( ()=>{
    this.router.navigate(["dash"])
  }
  
  , 500)
}
ngOnInit() {
}

onSubmit() {
  this.submitted = true;
  console.log("1111");

  // stop here if form is invalid
  if (this.messageForm.invalid) {
      return;
  }
  console.log("1111");

 
  this.authenticationService.
  login(this.messageForm.value).subscribe(
    (data)=>{
      console.log(data)
      if (data ==true)
      {console.log(data);
      this.router.navigate(['/dash']);
     console.log("user exists");
      this.success = true;
     this.snackBar.openSnackBar("Welcome!",'Close','red-snackbar');
      }
      else{
      this.snackBar.openSnackBar("Invalid Credentials",'Close','red-snackbar');
     
      }
     },
     (err) => {
      console.log("ERROR"+JSON.stringify(err))
      this.snackBar.openSnackBar(err._body,'Close','red-snackbar');

     });
    }
  
  }


/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utilisateur } from '../model/Utilisateur';
//import { NotificationsComponent } from '../notifications/notifications.component';
import { HtmlAstPath } from '@angular/compiler';
import { Http } from '@angular/http';
import { AuthService } from '../service/auth.service';
import { UtilisateurService } from '../service/utilisateur.service';
import { PermissionService } from '../service/permission.service';

import { FormControl, Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  utilisateur: Utilisateur = new Utilisateur();//  utilisateur.username and  utilisateur.password in html ([(ngModel)])
  errorMessage: string;
  data: any = {};
  name: string;
  remember: boolean = false;
  token: string;



  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute, http: Http, private authService: AuthService, private utilisateurService: UtilisateurService, private permissionService: PermissionService) {
    http.get('/dash')
      .subscribe(res => { this.data = res.json().Url; });
  }

  NameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
    Validators.minLength(3)

  ]);
  PasswordControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
    Validators.minLength(3)

  ]);


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.errorMessage = params['errorMessage'];

    }
    );
  }

  onSubmit() {

    this.authService.login(this. utilisateur, this.remember).subscribe(
      data => {
        this.router.navigate(['/dash']);
      },
      error => {
        this.errorMessage = 'Nom utilisateur ou mot de passe incorrect';
      }
    );
  }
  resetPassword() {

    this.authService.login(this. utilisateur, this.remember).subscribe(
      data => {
        this.router.navigate(['/reset']);
      }
    );
  }
}
*/
/*
import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentification.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';
import { Utilisateur } from '../model/Utilisateur';
import { PermissionService } from '../service/permission.service';
import { UtilisateurService } from '../service/utilisateur.service';
import { StorageService } from '../service/storage.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({ providedIn: 'root' })

export class LoginComponent implements OnInit {
  model: any = {};
  utilisateur: Utilisateur = new Utilisateur();// utilisateur.username and utilisateur.password in html ([(ngModel)])
  errorMessage: string;
  data: any = {};
  name: string;
  remember: boolean = false;
  token: string;



  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute, 
     http: Http, private authentificationService: AuthenticationService, 
    private utilisateurService: UtilisateurService, private permissionService: PermissionService) {
    
     
  }

  usernameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  PasswordControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
    Validators.minLength(5)

  ]);


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.errorMessage = params['errorMessage'];

    }
    );
  }

  onSubmit() {

    this.authentificationService.login(this.utilisateur, this.remember).subscribe(
      data => {
        this.router.navigate(['/dash']);
      },
      error => {
        this.errorMessage = 'Nom utilisateur ou mot de passe incorrect';
      }
    );
  }}*/