import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { AuthenticationService } from './authentification.service';
import {User} from '../model/User';
import { from } from 'rxjs';
const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}

var allUsers:string='http://localhost:9000/Utilisateur/allPersons';
var addUsers:string='http://localhost:9000/Utilisateur/addUser/';
var DeleteUser:string='http://localhost:9000/Utilisateur/deleteUser/';
var UpdateUserS:string='http://localhost:9000/Utilisateur/updateUser/';
var GetUser:string='http://localhost:9000/Utilisateur/getPersonsByID/'
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(public http: Http,private httpClient:HttpClient) { };
  /*getAllPersons() {
    throw new Error("Method not implemented.");
  }*/
 
  getAllUsers()
  {
   
       return this.http.get(allUsers).map((response:Response)=>response.json());        
  }
  AddUser(utilisateur,id: Number)
  {
      return this.http.post(addUsers+id,utilisateur);
  }
  DeleteUser(id: Number)
  {
      return this.http.delete(DeleteUser+id);
  }
  UpdateUsers(utilisateur,id: Number)
  {
      return this.http.put(UpdateUserS+id,utilisateur);
  }
} 