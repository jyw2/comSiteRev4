import { Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Item } from '../prices/item.model';


@Component({
  selector: 'app-illust-component',
  templateUrl: './illust-component.component.html',
  styleUrls: ['./illust-component.component.css']
})
export class IllustComponent implements OnInit {
  //mainCost params
  private charsheetCost = 90
  private singleFigPrice = 70



  @Output() priceChange = new EventEmitter()
  @Input() resetSubj:Subject<void>
  private resetSubs:Subscription
  public action:string ='remove'
  public opacity:number = 1

  public source:string
  public name:string
  private cost:number = 0
  private illustItems:{name:string, price:number}[] = []
  public illustOptions:string[] = []
  private bgItems:{name:string, price:number}[] = []
  public bgOptions:string[] = []
  private figureItems:{name:string, price:number}[] = []
  public figureOptions:string[] = []
  private shotItems:{name:string, ratio:number}[] = []
  public shotOptions:string[] = []
  private renderItems:{name:string, ratio:number}[] = []
  public renderOptions:string[] = []
  private movingItems:{name:string, price:number}[] = []
  public movingOptions:string[] = []


  //main parameters affecting final price
  private illust: string = 'character art'
  private bgCost:number = 5
  private figureCost:number = 1
  private renderRatio:number = 1
  private shotOption:number = 1
  private movingCost:number = 0




  constructor() { }

  ngOnInit(): void {
    //for when a new category is switched to
    this.resetSubs = this.resetSubj.subscribe(()=>{
      this.turnOn()
    })

    //create items
    //set pricing here!



    this.illustItems = [
      {name:'character art', price:0},
      {name:'character sheet', price:0},
    ]
    this.shotItems = [
      {name:'portrait', ratio:0.57},
      {name:'bust', ratio:0.72)},
      {name: 'torso', ratio:0.85)},
      {name: 'full figure' ,ratio: this.singleFigPrice}
    ]
    this.renderItems = [
      {name:'lines only', ratio: 0.4},
      {name:'full render', ratio: 1}
    ]

    this.bgItems = [
      {name:'none', price:0},
      {name: 'simple', price:5},
      {name:'complex', price:50}
    ]
    this.figureItems = [
      {name: '1', price: Math.floor(1*(this.singleFigPrice))},
      {name: '2', price: Math.floor(0.95*(2*this.singleFigPrice))},
      {name: '3', price: Math.floor(0.90*(3*this.singleFigPrice))},
      {name: '4', price: Math.floor(0.85*(4*this.singleFigPrice))},
      {name: '5', price: Math.floor(0.80*(5*this.singleFigPrice))},
      {name: '6', price: Math.floor(0.75*(6*this.singleFigPrice))},
      {name: '7', price: Math.floor(0.75*(7*this.singleFigPrice))},

    ]

    this.movingItems = [
      {name:'yes', price: 0},
      {name:'no', price: 20}
    ]


    //create name arrays
    this.copyNames(this.illustItems,this.illustOptions)
    this.copyNames(this.bgItems,this.bgOptions)
    this.copyNames(this.figureItems,this.figureOptions)
    this.copyNames(this.shotItems,this.shotOptions)
    this.copyNames(this.renderItems, this.renderOptions)
  }

  applyModifiers(base:number){
    //helper function to apply ratio modifiers: render and shot
    return this.renderRatio*this.shotOption*base
  }

  setIllust(index:number){
    this.illust = this.illustItems[index].name
  }

  setBg(index:number){
    this.bgCost = this.applyModifiers(this.bgItems[index].price)
  }

  setFigure(index:number){
    this.figureCost = this.applyModifiers(this.figureItems[index].price)
  }

  setRender(index:number){
    this.renderRatio = this.renderItems[index].ratio
  }

  setShot(index:number){
    this.shotOption = this.shotItems[index].ratio
  }

  setMove(index:number){
    this.movingCost = this.movingItems[index].price
  }

  recalculate(){
    //compute the cost
    if (this.illust == 'character art'){
      this.cost = this.figureCost+ this.movingCost + this.bgCost
    }else{
      this.cost = this.charsheetCost // character sheet cost
    }

  }

  copyNames(mainArray:{name:string, ratio:number}[] | {name:string, price:number} [],copy:string[]){
    //create the name only copy of the array
    let index = 0
    for (let item of mainArray){
      copy[index] = item.name
      index++
    }
  }

  ngOnDestroy(): void {
    this.resetSubs.unsubscribe()
  }


  toggle(){
    //add or remove the item from the package
    if(this.action == 'add'){
      //adding to package
      this.action = 'remove'
      this.opacity = 1
      this.priceChange.emit(this.cost)
    }else {
      //removing from package
      this.action = 'add'
      this.opacity = 0.3
      this.priceChange.emit(-this.cost)
    }
  }

  turnOn(){
    //toggles on the item
    this.action = 'remove'
    this.opacity = 1

  }

  hovered(){
    if(this.action == 'add'){
      this.opacity = 0.8
    }else {
      this.opacity = 0.5
    }
  }

  hoveredExit(){
    if(this.action == 'add'){
      this.opacity = 0.3
    }else {
      this.opacity = 1
    }
  }


}

