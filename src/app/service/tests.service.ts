import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable, from} from 'rxjs'
import  'rxjs/add/operator/map';
import{Test} from '../model/Test';
import { map } from 'rxjs/operators';
import {Qcm1 } from '../model/Qcm1';
import { AuthenticationService } from './authentification.service';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}


var allTests:string= 'http://localhost:9000/Test/allTests';
var nouveauTest:string='http://localhost:9000/Test/addTest';
var getTest:string='http://localhost:9000/Test/oneTest/';
var updateTest:string='http://localhost:9000/Test/updateTest/';
var DeleteTest:string='http://localhost:9000/Test/deleteTest/';
var createFile:string='http://localhost:9000/Test/createFile';
@Injectable({
  providedIn: 'root'
})
export class TestsService {

  
  
  
  constructor(public http: Http) { 
    
  }
  getAllTests()
    { 
      return this.http.get(allTests).map((response:Response)=>response.json());
    }
    createFile(test)
    {
      return this.http.post(createFile,test);
    }
    getTestByID(id: Number)
    {
        return this.http.get(getTest+id).map((response:Response)=>response.json());
    }
    UpdateTest(test,id: Number)
    {
        return this.http.put(updateTest+id,test);
    }
    addTest(test)
    {
      return this.http.post(nouveauTest,test);
     /*for (let permission of this.currentUser.test.permissions) {
      if(permission.name == "Ajouter Test")
      {
        return this.http.post(nouveauTest,test);  }
    }
  */
    }
    DeleteTest(id: Number)
    {
        return this.http.delete(DeleteTest+id);
    }
}