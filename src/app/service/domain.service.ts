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
  var allRoles:string= 'http://localhost:9000/Domain/allDomain';
  var nouveauRole:string='http://localhost:9000/Domain/addDomain';
  var getRole:string='http://localhost:9000/Domain/onedomaine/';
  var updateRole:string='http://localhost:9000/Domain/updateDomain/ ';
  var DeleteRole:string='http://localhost:9000/Domain/deleteDomain/';
  @Injectable({
    providedIn: 'root'
  })
    export class DomainService {
     domain : Domain [];
     constructor(public http: Http) {  
  }
  getAllDomains()
  { 
    return this.http.get(allRoles).map((response:Response)=>response.json());
  }
  getDomainByID(id: Number)
  {
    return this.http.get(getRole+id).map((response:Response)=>response.json());
  }
  UpdateDomain(domain,id: Number)
  {
    return this.http.put(updateRole+id,this.domain);
  }
  addDomain(domain)
  {
  return this.http.post(nouveauRole,this.domain);
  /*for (let permission of this.currentUser.role.permissions) {
  if(permission.name == "Ajouter Role")
  {
    return this.http.post(nouveauRole,role);  }
  }
  */
  }
  DeleteDomain(id: Number)
  {
    return this.http.delete(DeleteRole+id);
  }
  }
  