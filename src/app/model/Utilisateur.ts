import { Role } from "./role";
export class Utilisateur{
    id:number;
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    email:string; 
    role:Role;
    roles: Role[];
  
    }
   
    