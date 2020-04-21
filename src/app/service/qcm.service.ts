import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable, from} from 'rxjs'
import  'rxjs/add/operator/map';
import{Qcm} from '../model/Qcm';
import { map } from 'rxjs/operators';
import { Answer } from '../model/Answer';
import { Domain } from '../model/Domain';

import { AuthenticationService } from './authentification.service';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allQcms:string= 'http://localhost:9000/Qcm/allQcm';
var nouveauQcm:string='http://localhost:9000/Qcm/addQcm/';
var getQcm:string='http://localhost:9000/Qcm/oneQcm/';
var updateQcm:string='http://localhost:9000/Qcm/updateQcm/';
var DeleteQcm:string='http://localhost:9000/Qcm/deleteQcm/';

@Injectable({
    providedIn: 'root'
  })
  export class QcmService {
   qcms : Qcm[];
   constructor(public http: Http) { 
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  getAllQcms()
  { 
    return this.http.get(allQcms).map((response:Response)=>response.json());
  }
getQcmByID(id: Number)
{
    return this.http.get(getQcm+id).map((response:Response)=>response.json());
}
UpdateQcm(qcm,id: Number)
{
    return this.http.put(updateQcm+id,qcm);
}
addQcm(qcm,id:Number)
{
  return this.http.post(nouveauQcm+id,qcm);
 /*AddUser(utilisateur,id: Number)
  {
      return this.http.post(addUsers+id,utilisateur);
  }
*/
}
DeleteRole(id: Number)
{
    return this.http.delete(DeleteQcm+id);
}
}
