/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../model/Utilisateur';
import {  HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
var Login:string='http://localhost:9000/Utilisateur/verif';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Utilisateur>;
    public currentUser: Observable<Utilisateur>;

    constructor(private http: HttpClient,private route: ActivatedRoute ) {
        this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
   public get currentUserValue(): Utilisateur {
        return this.currentUserSubject.value;
    }
    
    login(user)
    {
      return this.http.post<any>(Login,user).pipe(map(user =>{
      
            // login successful if there's a jwt token in the response
            if (user ) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
    }

/*authenticate(username, password) {
    return this.http.post<any>('http://localhost:9000/authenticate',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }*/
 /* isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }*/
 

/*   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
  }
    /*
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Utilisateur } from '../model/Utilisateur';
//import { Configuration } from '../configuration';
import { UtilisateurService } from './utilisateur.service';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from './storage.service';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private Utilisateur: Utilisateur;
  private actionUrl: string;
  public token: string;
  private user: Utilisateur;
  //private configuration: Configuration;
  public permission: any = null;
  perssssss: any;
  public id: number;
  private headers = new Headers();
  private options;
  expirationPeriodCookies: any=0.0030;


  constructor(public storageService: StorageService, public cookieService: CookieService, public http: Http,
     private UtilisateurService: UtilisateurService) {
    this.actionUrl =  'http://localhost:9000/Utilisateur/verif';
   

  }

 verifToken(token: string): any {
  
    return this.http.get( 'new-password/' + token);
  }

  getExpirationPeriodCookies(token: string) {
    let headers = new Headers({ 'authorization': "Bearer " + token, 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get( 'auth/expirationPeriodCookies', options);
     
  }

  login(Utilisateur: Utilisateur): Observable<boolean> {
    return this.http.post(this.actionUrl, { username: Utilisateur.username, password: Utilisateur.password })
      .map((response: Response) => {
        if (response.status === 200) {

          // login successful if there's a jwt token in the response
          const token = response.headers.get('authorization');
          if (token) {
            // set token property
            this.token = token.toString();

            this.getExpirationPeriodCookies(token).subscribe((response) => {
              this.expirationPeriodCookies=+response["_body"];
            });
           this.UtilisateurService.getPermissionByUsername2(token).subscribe((per) => {
              StorageService.permission = JSON.stringify(per);

              }
              );
      
        
            this.saveInCookieOrInSession(Utilisateur, token);

            return true;
          }
        }
      })
      .catch((e: any) => Observable.throw(this.errorHandler(e)));

  }
  errorHandler(error: any): void {
  }


  saveInCookieOrInSession(Utilisateur: Utilisateur, jwtToken: string) {
    var splitted = jwtToken.split(" ");
   // if (rememberMe) {
     // this.cookieService.set('token', splitted[1], this.expirationPeriodCookies); //expiration date 2mint
   // } 
   // else {
      sessionStorage.setItem('token', splitted[1]);
    //}
  }


  logOut() {
    sessionStorage.removeItem('username')
  }
}
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../model/Utilisateur';

var Login:string='http://localhost:9000/Utilisateur/verif';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<Utilisateur>;
    public currentUser: Observable<Utilisateur>;
    public rep:boolean;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    
    public get currentUserValue(): Utilisateur {
        return this.currentUserSubject.value;
    }
    login(user)
    {
      return this.http.post<any>(Login,user).pipe(map(user =>{
      
            // login successful if there's a jwt token in the response
            if (user ) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
    }
    logOut() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
   