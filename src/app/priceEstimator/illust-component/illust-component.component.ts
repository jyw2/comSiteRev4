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
  private cost:number = 0

  //Communication Params
  @Output() priceChange = new EventEmitter()
  @Input() resetSubj:Subject<void>
  private resetSubs:Subscription


  //dynamic image vars
  public lineSrc:string = 'portraitLines.png'//defaults
  public bgSrc:string = 'null.png'
  public renderSrc:string = 'null.png'

  //hover effect params
  public action:string ='remove'
  public opacity:number = 1


  //items for dropdowns
  public illustItems:{name:string, price:number}[] = []
  public bgItems:{name:string, price:number}[] = []
  public figureItems:{name:string, price:number}[] = []
  public shotItems:{name:string, ratio:number}[] = []
  public renderItems:{name:string, ratio:number}[] = []
  public movingItems:{name:string, price:number}[] = []


  //main parameters affecting final price, INITIALIZERS ARE DEFAULTS!
  private illust: string = 'character art'
  private bgCost:number = 0
  private figureCost:number = this.singleFigPrice
  private renderRatio:number = 0.4
  private shotOption:number = 0.57
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
      {name:'bust', ratio:0.72},
      {name: 'torso', ratio:0.85},
      {name: 'full figure', ratio: 1}
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
      {name:'no', price: 0},
      {name:'yes', price: 20}
    ]

    this.recalculateOnly()
  }

  applyModifiers(base:number){
    //helper function to apply ratio modifiers: render and shot
    return Math.floor(this.renderRatio*this.shotOption*base)
  }

  setIllust(item:any){
    this.illust = item.name
    this.recalculate()
  }
  setBg(item:any){
    this.bgCost = item.price
    this.recalculate()
  }

  setFigure(item:any){
    this.figureCost = item.price
    this.recalculate()
  }

  setRender(item:any){
    this.renderRatio = item.ratio
    this.recalculate()
  }

  setShot(item:any){
    this.shotOption = item.ratio
    this.recalculate()
  }

  setMove(item:any){
    this.movingCost = item.price
    this.recalculate()
  }

  recalculate(){
    //compute the cost

    let ogCost = this.cost

    if (this.illust == 'character art'){

      this.cost = this.applyModifiers(this.figureCost ) + this.movingCost + Math.floor(this.renderRatio*this.bgCost)
    }else{
      this.cost = this.charsheetCost // character sheet cost
    }
    //emit the change in cost
    this.priceChange.emit(this.cost- ogCost)
  }

  recalculateOnly(){
     //compute the cost only

     let ogCost = this.cost

     if (this.illust == 'character art'){


      this.cost = this.applyModifiers(this.figureCost ) + this.movingCost + Math.floor(this.renderRatio*this.bgCost)
     }else{
       this.cost = this.charsheetCost // character sheet cost
     }
  }



  ngOnDestroy(): void {
    this.resetSubs.unsubscribe()
  }

  expose(){
    if(this.action == 'add'){
      //adding to package
      this.action = 'remove'
      this.opacity = 1
      this.priceChange.emit(this.cost)
    }
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
    this.priceChange.emit(this.cost)

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

