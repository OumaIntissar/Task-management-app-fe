import { Statut } from "./statut.model";
import { User } from "./user.model";

export interface Task {
    id:number;
    name:string;
    toDoDateTime:string;
    user:User;
    statut:Statut
  }