export interface Class {
  class_id : number;
  nom : string;
  niveau : string;
  examen : number;
  id_pension? : number
}

export interface Teacher {
  id ?: number;
  name : string;
  tel : number;
}
