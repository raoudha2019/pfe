import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {from} from 'rxjs'
//import{Qcm} from '../model/Qcm';
import{Qcm1} from '../model/Qcm1';
import {Response1} from '../model/Response1';
import { AuthenticationService } from './authentification.service';
const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}

var allQcms:string= 'http://localhost:9000/Res/allRes';
var addQcm:string='http://localhost:9000/Res//addResQcmJ/';
//var getQcm:string='http://localhost:9000/QcmJ/oneQcmJ/';
//var updateQcm:string='http://localhost:9000/QcmJ/updateQcm/';
//var DeleteQcm:string='http://localhost:9000/QcmJ/deleteQcmJ/'

@Injectable({
    providedIn: 'root'
  })
  export class Response1Service {

    constructor(public http: Http,private httpClient:HttpClient) { 
    }
    getAllRes()
    { 
      return this.http.get(allQcms).map((response:Response)=>response.json());
    }


    addRes(Qcm1 ,id: Number)
    {
      return this.http.post(addQcm+id,Qcm1);
    
    }
  }