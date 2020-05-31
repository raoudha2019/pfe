import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable, from} from 'rxjs'
import  'rxjs/add/operator/map';
import{Role} from '../model/Role';
import { map } from 'rxjs/operators';
import {Qcm1 } from '../model/Qcm1';
import { AuthenticationService } from './authentification.service';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}


var allTests:string= 'http://localhost:9000/Test/allTests';


@Injectable({
  providedIn: 'root'
})
export class TestsService {

  
  
  
  constructor(public http: Http) { 
    
  }
  getAllRoles()
    { 
      return this.http.get(allTests).map((response:Response)=>response.json());
    }
 
}