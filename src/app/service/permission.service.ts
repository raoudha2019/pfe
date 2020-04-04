import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs'
import  'rxjs/add/operator/map';
import{Permission} from '../model/Permission';



const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allPermissions:string='http://localhost:8080/Role/allRoles';
var DeletePerm:string='http://localhost:8080/Permissions/deleteperm/';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  permissions: Permission[];
  constructor(public http: Http) { }
  getAllPermissions()
  {
      return this.http.get(allPermissions).map((response:Response)=>response.json());
  }
  DeletePerm(id: Number)
  {
      return this.http.delete(DeletePerm+id);
  }
  
}