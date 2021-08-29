import { Item } from "./item.model";

export class Category{
  // Represents a commission category
  constructor(public name:string, public article:string,public items:Item[],public simple:number,public complex:number){

  }

}
