import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from './category.model';
import { Item } from './item.model';
import { fadeInTriggerNormal, fadeInTriggerDelay, fadeInTriggerDelay2} from '../../fadeIn.animation';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  animations: [ fadeInTriggerNormal, fadeInTriggerDelay, fadeInTriggerDelay2 ]

})
export class PricesComponent implements OnInit  {
  //holds all prices related components and controls category choice

  //misc vars
  public simpleItems:number
  public complexItems:number
  public catNames:string[] = []
  public cost:number = 0
  private category: Category

  //Item models
  public itemOne:Item = new Item('','',0);
  public itemTwo:Item = new Item('','',0);
  public itemThree:Item = new Item('','',0);
  public categories:Category[] = []

  //communication vars
  public resetItems = new Subject<void>()

  ngOnInit(): void {

    //create Items
    this.categories.push( new Category('Character Design','a',
        [
          new Item('In-depth design exploration', '../../assets/phase2.jpg', 30),
          new Item('In-depth color exploration','../../assets/phase3.jpg', 20)
        ], 2 , 1
      )

    )
    this.categories.push( new Category('Illustration','an',
        [
        ], 0 , 1
      )

    )

    //ENABLE WHEN ASSETS ARE READY
    // this.categories.push( new Category('VTuber Model','a',
    //     [
    //       new Item('Design', '',100),
    //       new Item('Illustration', '',149),
    //       new Item('Rigging', '',99)
    //     ], 3 , 0
    //   )

    // )
    this.sendNames()
    this.setCategory(this.categories[0])//param is the default Category
  }




  sendNames(){
    // creates an array of category names with articles and sends to dropdown
    for ( let category of this.categories){
      this.catNames.push(category.article +' '+ category.name)
    }
  }

  setCategory(cat:any){
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


    }

    //adds all items to total and reset/turn on them
    this.cost = 0

    //Relying on a timeout to wait for components to
    //load is not a great solution, but works for now
    setTimeout(()=>{
      this.resetItems.next()
    }, 300)


  }

  costChange(change:number){
    //updates price
    this.cost += change
  }

}
