

export class Item{

  constructor(

  public name:string,
  public image:string,
  public cost:number
  ){}


  replace(replacement:Item){
    //for replacing data in the item
    this.name = replacement.name
    this.image = replacement.image
    this.cost = replacement.cost
  }
}
