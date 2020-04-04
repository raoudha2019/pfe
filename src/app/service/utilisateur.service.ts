import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Utilisateur } from '../model/Utilisateur';
const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allUsers:string='http://localhost:8080/Utilisateur/allPersons';
var addUsers:string='http://localhost:8080/Utilisateur/addUser/';
var DeleteUser:string='http://localhost:8080/Utilisateur/deleteUser/';
var UpdateUserS:string='http://localhost:8080/Utilisateur/updateUser/';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  getAllPersons() {
    throw new Error("Method not implemented.");
  }
  utilisateurs: Utilisateur[];
  constructor(public http: Http) { }
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