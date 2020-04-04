import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../model/Utilisateur';

var Login:string='http://localhost:8080/Utilisateur/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Utilisateur>;
    public currentUser: Observable<Utilisateur>;

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


  

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }}