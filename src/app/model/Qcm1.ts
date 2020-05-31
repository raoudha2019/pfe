import {Domain} from './Domain';
import { Question_Body } from './Question_Body';
import {User} from './User'
import { Data } from '@angular/router';
import { from } from 'rxjs';
export class Qcm1 {
    id : number;
    status : String;
    questionBody :Question_Body ;
    question_body : JSON;
    question : String;
    //responses : [];
    domain : Domain;
    user:User;
    push: any;
}