import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http,  Headers, RequestOptions} from '@angular/http';
import { Observable, from} from 'rxjs'
import  'rxjs/add/operator/map';
import{Qcm} from '../model/Qcm';
import { map } from 'rxjs/operators';

import { Domain } from '../model/Domain';

import { AuthenticationService } from './authentification.service';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allRoles:string= 'http://localhost:9000/Answer/allAnsewr';
var nouveauRole:string='http://localhost:9000/Answer/addAnswer/';
var getRole:string='http://localhost:9000/Answer/oneAnswer/';
var updateRole:string='http://localhost:9000/Answer/updateAnswer/ ';
var DeleteRole:string='http://localhost:9000/Answer/deleteAnswer/';
@Injectable({
    providedIn: 'root'
  })
  export class AnswerService {
  // Answer:Answer [];
   constructor(public http: Http) {  
}
getAllAnswers()
{ 
  //return this.http.get(allRoles).map((response:Response)=>response.json());
}
getAnswerByID(id: Number)
{
 // return this.http.get(getRole+id).map((response:Response)=>response.json());
}
UpdateAnswer(answer,id: Number)
{
  return this.http.put(updateRole+id,answer);
}
addAnswers(answer)
{
return this.http.post(nouveauRole,answer);
/*for (let permission of this.currentUser.role.permissions) {
if(permission.name == "Ajouter Role")
{
  return this.http.post(nouveauRole,role);  }
}
*/
}
DeleteAnswer(id: Number)
{
  return this.http.delete(DeleteRole+id);
}
}
