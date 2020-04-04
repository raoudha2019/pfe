import { Role } from "./role";
export class Utilisateur{
    id:number;
    firstname:string;
    lastname:string;
    password:string;
    email:string; 
    role:Role;
  roles: Role[];
  
    }
   
    