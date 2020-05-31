



import {Response} from './Response'
import { Data } from '@angular/router';
import { from } from 'rxjs';
export class Question_Body {
    id : number;
    question : String;
    responses: Response[];
   
}