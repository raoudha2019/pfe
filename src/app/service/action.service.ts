import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';
import{Action} from '../model/action';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allActions:string='http://localhost:8080/PermissionGroup/allPermGroup';
var ActionsPriv:string='http://localhost:8080/PermissionGroup/PermissionGroup/';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  actions: Action[];
  constructor(public http: Http) { }
  getActions()
  {
      return this.http.get(allActions).map((response:Response)=>response.json());
  }
  getActionPermissions(id:Number)
  {
      return this.http.get(ActionsPriv+id).map((response:Response)=>response.json());
  }
 
}

