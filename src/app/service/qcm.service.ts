import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {from} from 'rxjs'
//import{Qcm} from '../model/Qcm';
import{Qcm1} from '../model/Qcm1';
import { AuthenticationService } from './authentification.service';
const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
var allQcms:string= 'http://localhost:9000/QcmJ/allQcm';
var addQcm:string='http://localhost:9000/QcmJ/addQcmJ/';
var getQcm:string='http://localhost:9000/QcmJ/oneQcmJ/';
var updateQcm:string='http://localhost:9000/QcmJ/updateQcm/';
var DeleteQcm:string='http://localhost:9000/QcmJ/deleteQcmJ/';
var getQcmbyDomain:string='http://localhost:9000/QcmJ/getqcms/';

@Injectable({
    providedIn: 'root'
  })
  export class QcmService {
  searchDomaines(url: string) {
    throw new Error("Method not implemented.");
  }
 // qcm1 : Qcm1[];
   constructor(public http: Http,private httpClient:HttpClient) { 
  }
  getAllQcms()
  { 
    return this.http.get(allQcms).map((response:Response)=>response.json());
  }
getQcmByID(id: Number)
{
    return this.http.get(getQcm+id).map((response:Response)=>response.json());
}
UpdateQcm(qcm1,id: Number)
{
    return this.http.put(updateQcm+id,qcm1);
}
addQcm(Qcm1,id: Number)
{
  return this.http.post(addQcm+Qcm1.selectedValue,Qcm1);

}
getbyDomain(id: Number)
{
  return this.http.get(getQcmbyDomain+id).map((response:Response)=>response.json());

}
DeleteQcm(id: Number)
{
    return this.http.delete(DeleteQcm+id);
}
}
