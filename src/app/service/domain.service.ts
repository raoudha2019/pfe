import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Domain } from '../model/Domain';

//import { AuthenticationService } from './authentification.service';

const headers={
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  }
  var allDom:string= 'http://localhost:9000/Domain/allDomain';
  var nouveauDom:string='http://localhost:9000/Domain/addDomain';
  var getDom:string='http://localhost:9000/Domain/onedomaine/';
  var updateDom:string='http://localhost:9000/Domain/updateDomain/ ';
  var deletDom:string='http://localhost:9000/Domain/deleteDomain/';
  @Injectable({
    providedIn: 'root'
  })
    export class DomainService {
     domain : Domain [];
     constructor(public http: Http) {  
  }
 
  DeleteDomain(id: Number)
  {
    return this.http.delete(deletDom+id);
  }
  getAllDomains()
  { 
    return this.http.get(allDom).map((response:Response)=>response.json());
  }
  getDomainByID(id: Number)
  {
    return this.http.get(getDom+id).map((response:Response)=>response.json());
  }
  
  UpdateDomain(domain,id: Number)
  {
    return this.http.put(updateDom+id,this.domain);
  }
  addDomain(domain)
  {
  return this.http.post(nouveauDom,this.domain);
  
  }
  
  }
  