import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from './category.model';
import { Item } from './item.model';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit  {

  public simpleItems:number
  public complexItems:number
  public catNames:string[] = []
  public cost:number = 0
  private category: Category

  public itemOne:Item = new Item('','',0);
  public itemTwo:Item = new Item('','',0);
  public itemThree:Item = new Item('','',0);
  public resetItems = new Subject<void>()



  public categories:Category[] = []

  // // Illustration information
  // public illustrationItem:ComplexItem = new ComplexItem('Illustration',[
  //   new Item('')
  // ])


  constructor() { }

  ngOnInit(): void {
    this.categories.push( new Category('Character Design','a',
        [
          new Item('In-depth exploration', '../../assets/phase2.jpg', 30),
          new Item('In-depth color exploration','../../assets/phase3.jpg', 20)
        ], 2 , 1
      )

    )
    this.categories.push( new Category('Illustration','an',
        [
        ], 0 , 1
      )

    )
    this.categories.push( new Category('VTuber Model','a',
        [
          new Item('Design', '',100),
          new Item('Illustration', '',149),
          new Item('Rigging', '',99)
        ], 3 , 0
      )

    )
    this.sendNames()
    this.setCategory(this.categories[0])
  }




  sendNames(){
    // creates an array of category names with articles and sends to dropdown
    for ( let category of this.categories){
      this.catNames.push(category.article +' '+ category.name)
    }
  }

  setCategory(cat:any){
    console.log('category set')

    //sets category and changes items accordingly


    this.category = cat
    let bindItems:Item[] = [this.itemOne,this.itemTwo,this.itemThree]



    this.simpleItems = this.category.simple
    this.complexItems = this.category.complex

    let index:number = 0

    for (let catItem of this.category.items){
      //pass info to properties binded to items
      bindItems[index].replace(catItem)

      index++

       //adds all items to total and activate them
       this.initialCost()
       this.resetItems.next()
    }

    //expose and turn on Illust (needs to be)

  }


  initialCost(){
    //sets costs on first visit to a category
    let netcost = 0
    for ( let item of this.category.items){
      netcost += item.cost
    }
    if(this.complexItems > 0){
      // add illust cost
    }
    this.cost = netcost
  }

  costChange(change:number){
    //updates price
    this.cost += change
  }

}
