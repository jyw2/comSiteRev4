import { Item } from "./item.model";

export class Category{

  constructor(public name:string, public article:string,public items:Item[],public simple:number,public complex:number){

  }

}
