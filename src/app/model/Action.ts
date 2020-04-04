import { Permission} from "./Permission";

export class Action {
    id : number;
    name: string="";
    permisssions:Permission[];
  numberPermission : number;
  selectAll  : Permission;
  listPermission: any;
  
}