import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs'
import  'rxjs/add/operator/map';
import{Role} from '../model/Role';
import { map } from 'rxjs/operators';



const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allRoles:string= 'http://localhost:8080/Role/allRoles';
var nouveauRole:string='http://localhost:8080/Role/addRolee';
var getRole:string='http://localhost:8080/Role/oneRole/';
var updateRole:string='http://localhost:8080/Role/updateRole/';
var DeleteRole:string='http://localhost:8080/Role/deleteRole/';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  roles: Role[];
  constructor(public http: Http) { }
  getAllRoles()
  {
      return this.http.get(allRoles).map((response:Response)=>response.json());
  }
  getRoleByID(id: Number)
  {
      return this.http.get(getRole+id).map((response:Response)=>response.json());
  }
  UpdateRole(role,id: Number)
  {
      return this.http.put(updateRole+id,role);
  }
  addRole(role)
  {
    return this.http.post(nouveauRole,role);  
  }
  DeleteRole(id: Number)
  {
      return this.http.delete(DeleteRole+id);
  }
}